import React from 'react'
import Call from '../Call/Call'

const How = () => {
    return (
        <section id='how'>
            <h2>How it works</h2>
            <div>
                <svg width="40" height="40">
                    <use xlinkHref="/images/icons.svg#icon-phone"></use>
                </svg>
                <h3>Step 1: Contact us and get a consultation</h3>
                <svg width="157" height="346">
                    <use xlinkHref="/images/icons.svg#icon-vector"></use>
                </svg>
                <p>First contact: Fill out the feedback form on our website or call us for an initial consultation.</p>
                <p>Needs analysis: Our experts will find out your needs and desires, as well as your budget and desired property characteristics, to offer the best options.</p>
                <p>Action plan: Together, we will discuss your options and create a customized buying or selling plan that best suits your needs.</p>
            </div>
            <div>
                <svg width="40" height="40">
                    <use xlinkHref="/images/icons.svg#icon-inspect"></use>
                </svg>
                <h3>Step 2: Search and inspect objects or buyers</h3>
                <svg width="157" height="346">
                    <use xlinkHref="/images/icons.svg#icon-vector"></use>
                </svg>
                <p>Market overview: We will conduct a detailed market analysis and select the best property options that meet your criteria.</p>
                <p>Organization of inspections: Our specialists will organize site visits at a time convenient for you, providing all the necessary information about each of them.</p>
                <p>Search for buyers: If you are selling real estate, we will provide an effective search for potential buyers and conduct presentations of the property.</p>
            </div>
            <div>
                <svg width="40" height="40">
                    <use xlinkHref="/images/icons.svg#icon-pay"></use>
                </svg>
                <h3>Step 3: Conclusion of the transaction and legal support</h3>
                <p>Legal support: We take care of all legal aspects of the transaction, ensuring full legal security of your purchase or sale.</p>
                <p>Negotiations: Our experts will help you negotiate with the other party to achieve the best possible deal.</p>
                <p>Preparation of documents: We will prepare all the necessary documents for the transaction and ensure that they are properly executed.</p>
            </div>
            <Call/>
        </section>
    )
}

export default How
