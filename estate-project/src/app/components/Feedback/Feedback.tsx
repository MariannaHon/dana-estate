
import React from 'react'
import { AnyAction } from 'redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { UseDispatch } from 'react-redux';
import { Formik, FormikHelpers, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Feedback = () => {

    // const dispatch = useDispatch();

    const Validator = Yup.object().shape({
        name: Yup.string().min(2, "Too Short!").max(15, "Too Long!").required("Required"),
        email: Yup.string().email("Invalid email address").required("Required") || Yup.number().required("Required"),
        theme: Yup.string().required("Required"),
        additional: Yup.string(),
    })

    const initialValues = {
        name: '',
        email: '',
        theme: '',
        feedback: '',
    }

    // const handleSubmit = (values:string, actions:string) => {
    //     dispatch((values));
    //     actions.resetForm();
    // };

    return (
        <div>
            <h2>Or send feedback</h2>
            <h3>Give us a rating</h3>
            <svg width="36" height="36">
                <use xlinkHref="./images/icons.svg#icon-star"></use>
            </svg>
            <svg width="36" height="36">
                <use xlinkHref="./images/icons.svg#icon-star"></use>
            </svg>
            <svg width="36" height="36">
                <use xlinkHref="./images/icons.svg#icon-star"></use>
            </svg>
            <svg width="36" height="36">
                <use xlinkHref="./images/icons.svg#icon-star"></use>
            </svg>
            <svg width="36" height="36">
                <use xlinkHref="./images/icons.svg#icon-star"></use>
            </svg>
            
            {/* <Formik
                initialValues={initialValues}
                validationSchema={Validator}
                onSubmit={handleSubmit}>
                <Form>
                    <Field type="text" name="name" placeholder="Name" />
                    <ErrorMessage name="name" component="div" />
                    
                    <Field type="email" name="email" placeholder="Email or phone number" />
                    <ErrorMessage name="email" component="div" />

                    <Field type="text" name="theme" />
                    <ErrorMessage name="theme" component="div" />

                    <Field type="text" name="feedback" />
                    <ErrorMessage name="feedback" component="div" />

                    <button type="submit">Send</button>
                </Form>
            </Formik> */}
        </div>
    )
}

export default Feedback
