import './SignUp.css'
import { useNavigate } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);

export const SignIn = ({users, submitValues}) => {
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string().required('required')
                    .min(
                        8,
                        'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special'
                    )
                    .minLowercase(1, 'password must contain at least 1 lower case letter')
                    .minUppercase(1, 'password must contain at least 1 upper case letter')
                    .minNumbers(1, 'password must contain at least 1 number')
                    .minSymbols(1, 'password must contain at least 1 special character'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    const user = users.filter(u => u.email === values.email)

                    if (user[0].email === values.email && user[0].password === values.password) {
                        submitValues(user[0])
                        navigate('/home')
                    }
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form className='login-page'>
                    <label className='label' htmlFor="email">Email</label>
                    <Field className='field' name="email" type="email" />
                    <span className='error'><ErrorMessage name="email" /></span>

                    <label className='label' htmlFor="password">Password</label>
                    <Field className='field' name="password" type="text" />
                    <span className='error'><ErrorMessage name="password" /></span>

                <button className='btn' type="submit">Submit</button>
            </Form>
        </Formik>
    );
};