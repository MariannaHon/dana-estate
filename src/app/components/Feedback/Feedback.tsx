'use client'

import React from 'react'
import { AnyAction } from 'redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { Formik, FormikHelpers, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from "next/image";
import Send from '../Send/Send'

import css from './Feedback.module.css';

const Feedback = () => {

    const dispatch = useDispatch<AppDispatch>();

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

    const handleSubmit = (values, actions) => {
        dispatch((values));
        actions.resetForm();
    };

    return (
        <section className={css.section}>
            <div>
                <Image
                    src="/images/door.jpg" width={708} height={536} alt="Keys in door">
                </Image>
            </div>
            <div className={css.container}>
                <h2 className={css.title}>Or send feedback</h2>
                <div className={css.wrapper}>
                    <div className={css.box}>
                        <h3 className={css.subtitle}>Give us a rating</h3>
                        <div className={css.stars}>
                            <svg className={css.icon}>
                                <use xlinkHref="./images/icons.svg#icon-star"></use>
                            </svg>
                            <svg className={css.icon}>
                                <use xlinkHref="./images/icons.svg#icon-star"></use>
                            </svg>
                            <svg className={css.icon}>
                                <use xlinkHref="./images/icons.svg#icon-star"></use>
                            </svg>
                            <svg className={css.icon}>
                                <use xlinkHref="./images/icons.svg#icon-star"></use>
                            </svg>
                            <svg className={css.icon}>
                                <use xlinkHref="./images/icons.svg#icon-star"></use>
                            </svg>
                        </div>
                    </div>
                    
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
            </div>
        </section>
    )
}

export default Feedback
