
import React from 'react'
import { AnyAction } from 'redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { UseDispatch } from 'react-redux';
import { Formik, FormikHelpers, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from "next/image";

import css from './Feedback.module.css';

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
            </div>
        </section>
    )
}

export default Feedback
