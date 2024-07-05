
import React from 'react';
import Image from "next/image";

import css from './About.module.css'

const About: React.FC = () => {
    return (
    <section className={css.section} id='about'>
        <div className={css.container}>
            <Image className={css.img}
                    src="/images/picture.jpg" width={708} height={536} alt="Small house">
            </Image>
        </div>
        <div className={css.wrapper}>
                <h2 className={css.title}>About us</h2>
                <p className={css.text}>Dana.Nieruchomości are a leading real estate agency that specializes in assisting in the purchase and sale of real estate. Having been on the market for over 10 years, we have gained a reputation as a reliable partner who always puts our client`s interests first.
Our team consists of experienced professionals who know the market inside out and are ready to share their knowledge and experience to make the process of buying or selling real estate simple and straightforward for you. We will help you find the perfect home or sell your existing property at a profit, providing professional support at every stage.</p>
        </div>
    </section>
    )
}

export default About
