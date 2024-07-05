import React from 'react'
import Call from '../Call/Call'

import css from './How.module.css'
import classNames from 'classnames'

const How = () => {

    const second = classNames(css.item, css.second);
    const third = classNames(css.item, css.third);

    return (
        <section className={css.section} id='how'>
            <h2 className={css.title}>How it works</h2>
            <ul className={css.list}>
                <li className={css.item}>
                    <div className={css.container}>
                        <svg className={css.icon} width="40" height="40">
                            <use xlinkHref="/images/icons.svg#icon-phone"></use>
                        </svg>
                        <h3 className={css.subtitle}>Step 1: Contact us and get a consultation</h3>
                    </div>
                    <div className={css.wrapper}>
                        <svg className={css.arrow} width="157" height="346">
                            <use xlinkHref="/images/icons.svg#icon-vector"></use>
                        </svg>
                        <div>
                            <p>First contact: Fill out the feedback form on our website or call us for an initial consultation.</p>
                            <p>Needs analysis: Our experts will find out your needs and desires, as well as your budget and desired property characteristics, to offer the best options.</p>
                            <p>Action plan: Together, we will discuss your options and create a customized buying or selling plan that best suits your needs.</p>
                        </div>
                    </div>
                </li>
                <li className={second}>
                    <div className={css.container}>
                        <svg className={css.icon} width="40" height="40">
                            <use xlinkHref="/images/icons.svg#icon-inspect"></use>
                        </svg>
                        <h3 className={css.subtitle}>Step 2: Search and inspect objects or buyers</h3>
                    </div>
                    <div className={css.wrapper}>
                        <svg className={css.arrow} width="157" height="346">
                            <use xlinkHref="/images/icons.svg#icon-vector"></use>
                        </svg>
                        <div>
                            <p>Market overview: We will conduct a detailed market analysis and select the best property options that meet your criteria.</p>
                            <p>Organization of inspections: Our specialists will organize site visits at a time convenient for you, providing all the necessary information about each of them.</p>
                            <p>Search for buyers: If you are selling real estate, we will provide an effective search for potential buyers and conduct presentations of the property.</p>
                        </div>
                    </div>
                </li>
                <li className={third}>
                    <div className={css.container}>
                        <svg className={css.icon} width="40" height="40">
                            <use xlinkHref="/images/icons.svg#icon-pay"></use>
                        </svg>
                        <h3 className={css.subtitle}>Step 3: Conclusion of the transaction and legal support</h3>
                    </div>
                    <div>
                        <p>Legal support: We take care of all legal aspects of the transaction, ensuring full legal security of your purchase or sale.</p>
                        <p>Negotiations: Our experts will help you negotiate with the other party to achieve the best possible deal.</p>
                        <p>Preparation of documents: We will prepare all the necessary documents for the transaction and ensure that they are properly executed.</p>
                    </div>
                </li>
            </ul>
            <Call/>
        </section>
    )
}

export default How
