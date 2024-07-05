import classNames from "classnames";

import Image from "next/image";
import React from 'react'
import SearchBox from '../SearchBox/SearchBox';
import ToDetails from '../ToDetails/ToDetails';
import css from './Offers.module.css'
import ToCatalogue from "../ToCatalogue/ToCatalogue";

const Offers = () => {

    const first = classNames(css.item, css.first);
    const second = classNames(css.item, css.second);
    const third = classNames(css.item, css.third);
    const fourth = classNames(css.item, css.fourth);
    const paragraph = classNames(css.text, css.special);

    return (
        <section className={css.section}>
            <h2 className={css.title}>Hot offers</h2>
            <SearchBox />
            <div className={css.container}>
                <ul className={css.list}>
                <li className={first}>
                    <div className={css.wrapper}>
                        <div className={css.left}>
                            <h3 className={css.subtitle}>13D Akhmatova Anna St.</h3>
                            <div className={css.icons}>
                                <div className={css.block}>
                                    <svg className={css.icon} width="40" height="40">
                                        <use xlinkHref="./images/icons.svg#icon-bed"></use>
                                    </svg>
                                    <p className={css.number}>2</p>
                                </div>
                                <div className={css.block}>
                                    <svg className={css.icon} width="40" height="40">
                                        <use xlinkHref="./images/icons.svg#icon-chair"></use>
                                    </svg>
                                    <p className={css.number}>1</p>
                                </div>
                                <div className={css.block}>
                                    <svg className={css.icon} width="40" height="40">
                                        <use xlinkHref="./images/icons.svg#icon-bath"></use>
                                    </svg>
                                    <p className={css.number}>1</p>
                                </div>
                            </div>
                        </div>
                        <div className={css.right}>
                            <svg className={css.fire} width="40" height="40">
                                <use xlinkHref="./images/icons.svg#icon-fire"></use>
                            </svg>
                            <p className={css.text}>80m2</p>
                        </div>
                    </div>
                    <div className={css.bottom}>
                        <p className={paragraph}>From € 200,000</p>
                        <ToDetails/>
                    </div>
                </li>
                <li className={second}>
                    <div className={css.wrapper}>
                        <div className={css.left}>
                            <h3 className={css.subtitle}>4B Staronavodnytska St.</h3>
                            <div className={css.icons}>
                                <div className={css.block}>
                                    <svg className={css.icon} width="40" height="40">
                                        <use xlinkHref="./images/icons.svg#icon-bed"></use>
                                    </svg>
                                    <p className={css.number}>2</p>
                                </div>
                                <div className={css.block}>
                                    <svg className={css.icon} width="40" height="40">
                                        <use xlinkHref="./images/icons.svg#icon-chair"></use>
                                    </svg>
                                    <p className={css.number}>1</p>
                                </div>
                                <div className={css.block}>
                                    <svg className={css.icon} width="40" height="40">
                                        <use xlinkHref="./images/icons.svg#icon-bath"></use>
                                    </svg>
                                    <p className={css.number}>1</p>
                                </div>
                                <div className={css.block}>
                                    <svg className={css.icon} width="40" height="40">
                                        <use xlinkHref="./images/icons.svg#icon-swim"></use>
                                    </svg>
                                    <p className={css.number}>1</p>
                                </div>
                            </div>
                        </div>
                        <div className={css.right}>
                            <svg className={css.fire} width="40" height="40">
                                <use xlinkHref="./images/icons.svg#icon-fire"></use>
                            </svg>
                            <p className={css.text}>80m2</p>
                        </div>
                    </div>
                    <div className={css.bottom}>
                        <p className={paragraph}>From €185,000</p>
                        <ToDetails/>
                    </div>
                </li>
                <li className={third}>
                    <div className={css.wrapper}>
                        <div className={css.left}>
                            <h3 className={css.subtitle}>40B Revutskoho St.</h3>
                            <div className={css.icons}>
                                <div className={css.block}>
                                    <svg className={css.icon} width="40" height="40">
                                        <use xlinkHref="./images/icons.svg#icon-bed"></use>
                                    </svg>
                                    <p className={css.number}>2</p>
                                </div>
                                <div className={css.block}>
                                    <svg className={css.icon} width="40" height="40">
                                        <use xlinkHref="./images/icons.svg#icon-chair"></use>
                                    </svg>
                                    <p className={css.number}>1</p>
                                </div>
                                <div className={css.block}>
                                    <svg className={css.icon} width="40" height="40">
                                        <use xlinkHref="./images/icons.svg#icon-bath"></use>
                                    </svg>
                                    <p className={css.number}>1</p>
                                </div>
                            </div>
                        </div>
                        <div className={css.right}>
                            <svg className={css.fire} width="40" height="40">
                                <use xlinkHref="./images/icons.svg#icon-fire"></use>
                            </svg>
                            <p className={css.text}>80m2</p>
                        </div>
                    </div>
                    <div className={css.bottom}>
                        <p className={paragraph}>From €215,000</p>
                        <ToDetails/>
                    </div>
                </li>
                <li className={fourth}>
                    <div className={css.wrapper}>
                        <div className={css.left}>
                            <h3 className={css.subtitle}>11A Berestetska St.</h3>
                            <div className={css.icons}>
                                <div className={css.block}>
                                    <svg className={css.icon} width="40" height="40">
                                        <use xlinkHref="./images/icons.svg#icon-bed"></use>
                                    </svg>
                                    <p className={css.number}>2</p>
                                </div>
                                <div className={css.block}>
                                    <svg className={css.icon} width="40" height="40">
                                        <use xlinkHref="./images/icons.svg#icon-chair"></use>
                                    </svg>
                                    <p className={css.number}>1</p>
                                </div>
                                <div className={css.block}>
                                    <svg className={css.icon} width="40" height="40">
                                        <use xlinkHref="./images/icons.svg#icon-bath"></use>
                                    </svg>
                                    <p className={css.number}>1</p>
                                </div>
                                <div className={css.block}>
                                    <svg className={css.icon} width="40" height="40">
                                        <use xlinkHref="./images/icons.svg#icon-swim"></use>
                                    </svg>
                                    <p className={css.number}>1</p>
                                </div>
                            </div>
                        </div>
                        <div className={css.right}>
                            <svg className={css.fire} width="40" height="40">
                                <use xlinkHref="./images/icons.svg#icon-fire"></use>
                            </svg>
                            <p className={css.text}>80m2</p>
                        </div>
                    </div>
                    <div className={css.bottom}>
                        <p className={paragraph}>From €210,000</p>
                        <ToDetails/>
                    </div>
                </li>
            </ul>
            <ToCatalogue/>
            </div>
        </section>
    )
}

export default Offers
