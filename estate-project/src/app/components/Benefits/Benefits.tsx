
import React from 'react';
import Image from "next/image";

const Benefits = () => {
    return (
        <div>
            <h2>Our benefits</h2>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td rowSpan={2}>
                                <svg>
                                    <use xlinkHref="./images/icons.svg#icon-invest" width="40" height="40"></use>
                                </svg>
                            </td>
                            <td>Investing with experts</td>
                            <td rowSpan = {2}>
                                <svg>
                                    <use xlinkHref="./images/icons.svg#icon-quality" width="40" height="40"></use>
                                </svg>
                            </td>
                            <td>High quality</td>
                        </tr>
                        <tr>
                            <td>Our experts have many years of experience in real estate, which allows us to provide professional and informed advice.</td>
                            <td>The highest quality of services and compliance with European standards.</td>
                        </tr>
                        <tr>
                            <td rowSpan = {2}>
                                <svg>
                                    <use xlinkHref="./images/icons.svg#icon-tech" width="40" height="40"></use>
                                </svg>
                            </td>
                            <td>Modern technologies</td>
                            <td rowSpan = {2}>
                                <svg>
                                    <use xlinkHref="./images/icons.svg#icon-flex" width="40" height="40"></use>
                                </svg>
                            </td>
                            <td>Flexibility</td>
                        </tr>
                        <tr>
                            <td>We use modern technologies and tools to effectively search for real estate and attract buyers.</td>
                            <td>We work quickly and efficiently to help you find a buyer or a property in the shortest possible time.</td>
                        </tr>
                        <tr>
                            <td rowSpan = {2}>
                                <svg>
                                    <use xlinkHref="./images/icons.svg#icon-simple" width="40" height="40"></use>
                                </svg>
                            </td>
                            <td>Simplicity and convenience</td>
                            <td rowSpan = {2}>
                                <svg>
                                    <use xlinkHref="./images/icons.svg#icon-support" width="40" height="40"></use>
                                </svg>
                            </td>
                            <td>Full legal support</td>
                        </tr>
                        <tr>
                            <td>All terms of the transaction are explained in detail, and you are always aware of all the steps of the process. </td>
                            <td>We take care of all legal aspects of the process, including document review, drafting contracts and closing the deal.</td>
                        </tr>
                        <tr>
                            <td rowSpan = {2}>
                                <svg>
                                    <use xlinkHref="./images/icons.svg#icon-key" width="40" height="40"></use>
                                </svg>
                            </td>
                            <td>Turnkey apartment</td>
                            <td rowSpan = {2}>
                                <svg>
                                    <use xlinkHref="./images/icons.svg#icon-partners" width="40" height="40"></use>
                                </svg>
                            </td>
                            <td>Reliable partners</td>
                        </tr>
                        <tr>
                            <td>We offer services for the complete preparation of your new apartment for occupancy.</td>
                            <td>We work only with trusted and reliable partners to ensure the best possible result for you.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Benefits
