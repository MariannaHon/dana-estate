
import Image from "next/image";
import React from 'react'
import SearchBox from '../SearchBox/SearchBox';
import ToDetails from '../ToDetails/ToDetails';
import css from './Offers.module.css'
import ToCatalogue from "../ToCatalogue/ToCatalogue";

const Offers = () => {
    return (
        <div>
            <h2>Hot offers</h2>
            <SearchBox />
            <ul>
                <li>
                    <Image src="/images/flat.jpg" alt="Flat with good view" width={624} height={448}/>
                    <div>
                        <h3>13D Akhmatova Anna St.</h3>
                        <svg className={css.icon} width="40" height="40">
                            <use href="./images/icons.svg#icon-fire"></use>
                        </svg>
                        <svg width="40" height="40">
                            <use href="./images/icons.svg#icon-bed"></use>
                        </svg>
                        <svg width="40" height="40">
                            <use href="./images/icons.svg#icon-chair"></use>
                        </svg>
                        <svg width="40" height="40">
                            <use href="./images/icons.svg#icon-bath"></use>
                        </svg>
                        <p>80m2</p>
                        <p>From € 200,000</p>
                        <ToDetails/>
                    </div>
                </li>
                <li>
                    <Image src="/images/flat2.jpg" alt="Flat with plants" width={624} height={448}/>
                    <div>
                        <h3>4B Staronavodnytska St.</h3>
                        <svg width="40" height="40">
                            <use href="./images/icons.svg#icon-fire"></use>
                        </svg>
                        <svg width="40" height="40">
                            <use href="./images/icons.svg#icon-bed"></use>
                        </svg>
                        <svg width="40" height="40">
                            <use href="./images/icons.svg#icon-chair"></use>
                        </svg>
                        <svg width="40" height="40">
                            <use href="./images/icons.svg#icon-bath"></use>
                        </svg>
                        <svg width="40" height="40">
                            <use href="./images/icons.svg#icon-swim"></use>
                        </svg>
                        <p>80m2</p>
                        <p>From €185,000</p>
                        <ToDetails/>
                    </div>
                </li>
                <li>
                    <Image src="/images/flat3.jpg" alt="Flat with red chair" width={624} height={448}/>
                    <div>
                        <h3>40B Revutskoho St.</h3>
                        <svg width="40" height="40">
                            <use href="./images/icons.svg#icon-fire"></use>
                        </svg>
                        <svg width="40" height="40">
                            <use href="./images/icons.svg#icon-bed"></use>
                        </svg>
                        <svg width="40" height="40">
                            <use href="./images/icons.svg#icon-chair"></use>
                        </svg>
                        <svg width="40" height="40">
                            <use href="./images/icons.svg#icon-bath"></use>
                        </svg>
                        <p>80m2</p>
                        <p>From €215,000</p>
                        <ToDetails/>
                    </div>
                </li>
                <li>
                    <Image src="/images/flat4.jpg" alt="Flat with TV" width={624} height={448}/>
                    <div>
                        <h3>11A Berestetska St.</h3>
                        <svg width="40" height="40">
                            <use href="./images/icons.svg#icon-fire"></use>
                        </svg>
                        <svg width="40" height="40">
                            <use href="./images/icons.svg#icon-bed"></use>
                        </svg>
                        <svg width="40" height="40">
                            <use href="./images/icons.svg#icon-chair"></use>
                        </svg>
                        <svg width="40" height="40">
                            <use href="./images/icons.svg#icon-bath"></use>
                        </svg>
                        <svg width="40" height="40">
                            <use href="./images/icons.svg#icon-swim"></use>
                        </svg>
                        <p>80m2</p>
                        <p>From €210,000</p>
                        <ToDetails/>
                    </div>
                </li>
            </ul>
            <ToCatalogue/>
        </div>
    )
}

export default Offers
