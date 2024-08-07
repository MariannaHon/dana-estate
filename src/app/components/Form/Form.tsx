'use client'

import React from 'react';
import { AnyAction } from 'redux';
import { PayloadAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './Form.module.css'
import { AppDispatch } from '@/redux/store';
import Send from '../Send/Send'


const Form = () => {

    const dispatch = useDispatch<AppDispatch>();

    const Validator = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(15, "Too Long!").required("Required"),
        email: Yup.string().email("Invalid email address").required("Required") || Yup.number().required("Required"),
        theme: Yup.string().required("Required"),
        additional: Yup.string(),
    })

    const initialValues = {
        name: '',
        email: '',
        theme: '',
        additional: '',
    }

    const handleSubmit = (values, actions) => {
        dispatch((values));
        actions.resetForm();
    };

    return (
    <div>
        <Formik
            initialValues={initialValues}
            validationSchema={Validator}
            onSubmit={handleSubmit}>
            <Form className={css.form}>
                <ErrorMessage className={css.error} name="name" component="div" />
                <Field className={css.input} type="text" name="name" placeholder="Name" />
                
                <ErrorMessage className={css.error} name="email" component="div" />
                <Field className={css.input} type="email" name="email" placeholder="Email or phone number" />
                
                <ErrorMessage className={css.error} name="theme" component="div" />
                <Field className={css.input} type="text" list="options" name="theme" placeholder="Theme" />
                <datalist id='options'>
                        <option value="some text" />
                        <option value="some text" />
                        <option value="some text" />
                </datalist>
                
                <ErrorMessage className={css.error} name="additional" component="div" />
                <Field className={css.input} type="text" name="additional" placeholder="Additional information..." />
                
                <Send/>
            </Form>
        </Formik>
    </div>
    )
}

export default Form


