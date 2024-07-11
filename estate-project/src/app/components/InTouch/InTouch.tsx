
import React from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { UseDispatch } from 'react-redux';
import { Formik, FormikHelpers, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from "next/image";
import css from './InTouch.module.css'


const InTouch = () => {

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
        additional: '',
    }

    // const handleSubmit = (values:string, actions:string) => {
    //     dispatch((values));
    //     actions.resetForm();
    // };

    return (
        <section className={css.section} id='contacts'>
            <div className={css.container}>
                <h2 className={css.title}>Get in touch</h2>
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

                    <Field type="text" name="additional" />
                    <ErrorMessage name="additional" component="div" />

                    <button type="submit">Send</button>
                </Form>
            </Formik> */}
            </div>
            <div>
                <Image className={css.img}
                    src="/images/keys.jpg" width={708} height={536} alt="Keys in hand">
                </Image>
            </div>
        </section>
    )
}

export default InTouch