
import React from 'react'
import css from './Hero.module.css';
import ToCatalogue from '../ToCatalogue/ToCatalogue'

const Hero = () => {
    return (
    <section className={css.section}>
        <div id='hero' className={css.hero}>
            <div className={css.text}>
                <h1 className={css.title}>Explore a real estate market in Warsaw</h1>
                <p className={css.paragraph}>We will help you find the property of your dreams</p>
                <ToCatalogue/>
            </div>
        </div>
        <div className={css.wrapper}>
            <ul className={css.list}>
                <li className={css.item}>
                    <h4 className={css.bold}>5+</h4>
                    <p className={css.thin}>Years on the market</p>
                </li>
                <li className={css.item}>
                    <h4 className={css.bold}>900+</h4>
                    <p className={css.thin}>Satisfied customers</p>
                </li>
                <li className={css.item}>
                    <h4 className={css.bold}>2000+</h4>
                    <p className={css.thin}>Successfully completed cases</p>
                </li>
            </ul>
        </div>
    </section>
    )
}

export default Hero
