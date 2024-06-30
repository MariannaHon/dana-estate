
import React from 'react'
import Image from "next/image";
import ToDetails from '../ToDetails/ToDetails'

const Flat = () => {
    return (
        <div>
            <Image src="/images/flat.jpg" alt="Flat with good view" width={624} height={448}/>
            <div>
                <h3>13D Akhmatova Anna St.</h3>
                <svg width="40" height="40">
                    <use xlinkHref="./images/icons.svg#icon-fire"></use>
                </svg>
                <svg width="40" height="40">
                    <use xlinkHref="./images/icons.svg#icon-bed"></use>
                </svg>
                <svg width="40" height="40">
                    <use xlinkHref="./images/icons.svg#icon-chair"></use>
                </svg>
                <svg width="40" height="40">
                    <use xlinkHref="./images/icons.svg#icon-bath"></use>
                </svg>
                <p>80m2</p>
                <p>From € 200,000</p>
                <ToDetails/>
            </div>
        </div>
    )
}

export default Flat
