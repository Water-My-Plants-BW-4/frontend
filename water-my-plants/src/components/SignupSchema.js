import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    name: Yup
    .string()
    .required('Name'),

    email: Yup
    .string()
    .required('Email'),

    password: Yup
    .string()
    .required('Create Your Password'),
})

export default SignupSchema;