
import React from 'react'
import Image from "next/image";
import Layout from '@/app/components/Layout/Layout';

const page = () => {
    return (
        <Layout>
            <div>
                <Image src="/images/flat.jpg" alt="Flat with good view" width={624} height={448}/>
                <div>
                    <h3>13D Akhmatova Anna St.</h3>
                    <p>Białołęka</p>
                    <svg width="40" height="40">
                        <use xlinkHref="/images/icons.svg#icon-fire"></use>
                    </svg>
                    <svg width="40" height="40">
                        <use xlinkHref="/images/icons.svg#icon-bed"></use>
                    </svg>
                    <svg width="40" height="40">
                        <use xlinkHref="/images/icons.svg#icon-chair"></use>
                    </svg>
                    <svg width="40" height="40">
                        <use xlinkHref="/images/icons.svg#icon-bath"></use>
                    </svg>
                    <p>80m2</p>
                    <p>From € 200,000</p>
                    <a href="">Request a call</a>
                </div>
            </div>
            <div>
                <h3>Verified apartment</h3>
                <ul>
                    <li>
                        <svg width="32" height="33">
                            <use xlinkHref="/images/icons.svg#icon-ok"></use>
                        </svg>
                        <p>Primary real estate</p>
                    </li>
                    <li>
                        <svg width="32" height="33">
                            <use xlinkHref="/images/icons.svg#icon-ok"></use>
                        </svg>
                        <p>3 rooms</p>
                    </li>
                    <li>
                        <svg width="32" height="33">
                            <use xlinkHref="/images/icons.svg#icon-ok"></use>
                        </svg>
                        <p>25th floor out of 36</p>
                    </li>
                    <li>
                        <svg width="32" height="33">
                            <use xlinkHref="/images/icons.svg#icon-ok"></use>
                        </svg>
                        <p>Offer from the developer</p>
                    </li>
                </ul>
            </div>
        </Layout>
    )
}

export default page
