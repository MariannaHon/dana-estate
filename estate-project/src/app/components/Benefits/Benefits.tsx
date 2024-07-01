
import React from 'react';
import Image from "next/image";

import css from './Benefits.module.css';

const Benefits = () => {
    return (
        <section className={css.section} id='benefits'>
            <h2 className={css.title}>Our benefits</h2>
            <div>
                <table className={css.table}>
                    <tbody>
                        <tr>
                            <td rowSpan={2}>
                                <svg className={css.icons}>
                                    <use xlinkHref="./images/icons.svg#icon-invest" width="40" height="40"></use>
                                </svg>
                            </td>
                            <td className={css.subtitle}>Investing with experts</td>
                            <td className={css.columns} rowSpan = {2}>
                                <svg className={css.icons}>
                                    <use xlinkHref="./images/icons.svg#icon-quality" width="40" height="40"></use>
                                </svg>
                            </td>
                            <td className={css.subtitle}>High quality</td>
                        </tr>
                        <tr className={css.item}>
                            <td className={css.text}>Our experts have many years of experience in real estate, which allows us to provide professional and informed advice.</td>
                            <td className={css.text}>The highest quality of services and compliance with European standards.</td>
                        </tr>
                        <tr>
                            <td rowSpan = {2}>
                                <svg className={css.icons}>
                                    <use xlinkHref="./images/icons.svg#icon-tech" width="40" height="40"></use>
                                </svg>
                            </td>
                            <td className={css.subtitle}>Modern technologies</td>
                            <td className={css.columns} rowSpan = {2}>
                                <svg className={css.icons}>
                                    <use xlinkHref="./images/icons.svg#icon-flex" width="40" height="40"></use>
                                </svg>
                            </td>
                            <td className={css.subtitle}>Flexibility</td>
                        </tr>
                        <tr className={css.item}>
                            <td className={css.text}>We use modern technologies and tools to effectively search for real estate and attract buyers.</td>
                            <td className={css.text}>We work quickly and efficiently to help you find a buyer or a property in the shortest possible time.</td>
                        </tr>
                        <tr>
                            <td rowSpan = {2}>
                                <svg className={css.icons}>
                                    <use xlinkHref="./images/icons.svg#icon-simple" width="40" height="40"></use>
                                </svg>
                            </td>
                            <td className={css.subtitle}>Simplicity and convenience</td>
                            <td className={css.columns} rowSpan = {2}>
                                <svg className={css.icons}>
                                    <use xlinkHref="./images/icons.svg#icon-support" width="40" height="40"></use>
                                </svg>
                            </td>
                            <td className={css.subtitle}>Full legal support</td>
                        </tr>
                        <tr className={css.item}>
                            <td className={css.text}>All terms of the transaction are explained in detail, and you are always aware of all the steps of the process. </td>
                            <td className={css.text}>We take care of all legal aspects of the process, including document review, drafting contracts and closing the deal.</td>
                        </tr>
                        <tr>
                            <td rowSpan = {2}>
                                <svg className={css.icons}>
                                    <use xlinkHref="./images/icons.svg#icon-key" width="40" height="40"></use>
                                </svg>
                            </td>
                            <td className={css.subtitle}>Turnkey apartment</td>
                            <td className={css.columns} rowSpan = {2}>
                                <svg className={css.icons}>
                                    <use xlinkHref="./images/icons.svg#icon-partners" width="40" height="40"></use>
                                </svg>
                            </td>
                            <td className={css.subtitle}>Reliable partners</td>
                        </tr>
                        <tr className={css.item}>
                            <td className={css.text}>We offer services for the complete preparation of your new apartment for occupancy.</td>
                            <td className={css.text}>We work only with trusted and reliable partners to ensure the best possible result for you.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Benefits
