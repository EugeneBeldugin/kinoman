import './SignUp.css'
import { useNavigate } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);

export const SignUp = ({submitValues}) => {
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
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
                    submitValues(values)
                    navigate('/home')
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form className='login-page'>
                    <label className='label' htmlFor="email">Email</label>
                    <Field className='field' name="email" type="email" />
                    <span className='error'><ErrorMessage name="email" /></span>

                    <label className='label' htmlFor="name">Name</label>
                    <Field className='field' name="name" type="text" />
                    <span className='error'><ErrorMessage name="name" /></span>

                    <label className='label' htmlFor="password">Password</label>
                    <Field className='field' name="password" type="text" />
                    <span className='error'><ErrorMessage name="password" /></span>

                <button className='btn' type="submit">Submit</button>
            </Form>
        </Formik>
    );
};