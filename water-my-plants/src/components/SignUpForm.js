import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './Form';
import SignupSchema from './SignupSchema';
import * as Yup from 'yup';
import './App.css';

const signupForm = {
  name: '',
  email: '',
  password: '',
}

const signupFormErrors = { 
  name: '',
  email: '',
  password: '',
}


export default function SignupForm() {
  const [user, setUser] = useState([])
  const [formValues, setFormValues] = useState(signupForm)
  const [disabled, setDisabled] = useState(false)
  const [errors, setErrors] = useState(signupFormErrors)

  const onInputChange = e => {
    const { name, value } = e.target

    Yup
    .reach(SignupSchema, name)
    .validate(value)
    .then(() => {
      setErrors({
        ...errors, [name]: ''
      })
    })
    .catch(err => {
      setErrors({
        ...errors, [name]: err.errors[0]
      })
    })

    setFormValues({
      ...formValues, [name]: value
    })
  }

  const onSubmit = e => {
    e.preventDefault()

    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    setUser([...user, newUser])
  }

  useEffect(() => {
    SignupSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])


  return (
    <div>
      <Switch>
        <Route path='/signup'>
          <Form
          values={formValues}
          onSubmit={onSubmit}
          onInputChange={onInputChange}
          disabled={disabled}
          errors={errors} />
          {
            user.map((creatUser, i) => {
              return (
                <div key={i}>
                <h3>{creatUser.name}</h3>
                <h3>{creatUser.email}</h3>
                </div>
              )
            })
          }
        </Route>
      </Switch> 
    </div>
  );
}
