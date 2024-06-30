
import React from 'react'
import Image from "next/image";
import css from './Hero.module.css';
import ToCatalogue from '../ToCatalogue/ToCatalogue'

const Hero = () => {
    return (
    <section>
        <div id='hero' className={css.hero}>
                <h1>Explore a real estate market in Warsaw</h1>
                <p>We will help you find the property of your dreams</p>
                <ToCatalogue/>
        </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>5+</th>
                            <th>900+</th>
                            <th>2000+</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Years on the market</td>
                            <td>Satisfied customers</td>
                            <td>Successfully completed cases</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    </section>
    )
}

export default Hero
