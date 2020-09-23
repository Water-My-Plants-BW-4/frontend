import React from 'react';

export default function Form(props) {
    const {
        values,
        onSubmit, 
        onInputChange,
        errors,
    } = props
    
    return (
        <form onSubmit={onSubmit}>
            <div>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div>

            <div>
                <h1>Sign Up!</h1>
                <label>Please Enter Your Name: 
                    <input
                    value={values.name}
                    type="text"
                    name="name"
                    onChange={onInputChange} />
                    </label>
            </div>

            <div>
            <label>Please Enter Your Email: 
                    <input
                    value={values.email}
                    type="text"
                    name="email"
                    onChange={onInputChange} />
                    </label>
            </div>

            <div>
            <label>Please Create Your Password: 
                    <input
                    value={values.password}
                    type="text"
                    name="password"
                    onChange={onInputChange} />
                    </label>
                    <button>Create Your Account</button>
            </div>
        </form>
    )
}