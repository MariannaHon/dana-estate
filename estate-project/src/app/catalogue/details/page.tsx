
import React from 'react'
import Image from "next/image";
import Layout from '@/app/components/Layout/Layout';
import FlatList from '@/app/components/FlatList/FlatList';
import Menu from '@/app/components/Menu/Menu';
import Call from '@/app/components/Call/Call';

import css from './page.module.css';
import classNames from 'classnames';
import Offers from '@/app/components/Offers/Offers';

const page = () => {

    const special = classNames(css.min, css.special);

    return (
        <Layout>
            <Menu />
            <main className={css.block}>
                <div className={css.container}>
                    <div className={css.images}>
                        <Image className={css.image} src="/images/flat.jpg" alt="Flat with good view" width={840} height={812} />
                        <div className={css.descr}>
                            <div className={css.location}>
                                <h3 className={css.street}>13D Akhmatova Anna Street</h3>
                                <p className={css.area}>Białołęka</p>
                            </div>
                            <div className={css.middle}>
                                <div className={css.icons}>
                                    <div className={css.iconsBox}>
                                        <svg className={css.icon} width="40" height="40">
                                            <use xlinkHref="/images/icons.svg#icon-bed"></use>
                                        </svg>
                                        <p className={css.numbers}>2</p>
                                    </div>
                                    <div className={css.iconsBox}>
                                        <svg className={css.icon} width="40" height="40">
                                            <use xlinkHref="/images/icons.svg#icon-chair"></use>
                                        </svg>
                                        <p className={css.numbers}>1</p>
                                    </div>
                                    <div className={css.iconsBox}>
                                        <svg className={css.icon} width="40" height="40">
                                            <use xlinkHref="/images/icons.svg#icon-bath"></use>
                                        </svg>
                                        <p className={css.numbers}>1</p>
                                    </div>
                                </div>
                                <p className={css.meter}>80m2</p>
                            </div>
                            <div className={css.buy}>
                                <p className={css.price}>From € 200,000</p>
                                <a href="#contacts" className={css.btn}>Request a call</a>
                            </div>
                        </div>
                    </div>
                    <div className={css.details}>
                        <div className={css.verified}>
                            <h3 className={css.title}>Verified apartment</h3>
                            <ul className={css.list}>
                                <li className={css.item}>
                                    <svg className={css.icon} width="32" height="33">
                                        <use xlinkHref="/images/icons.svg#icon-ok"></use>
                                    </svg>
                                    <p>Primary real estate</p>
                                </li>
                                <li className={css.item}>
                                    <svg className={css.icon} width="32" height="33">
                                        <use xlinkHref="/images/icons.svg#icon-ok"></use>
                                    </svg>
                                    <p>3 rooms</p>
                                </li>
                                <li className={css.item}>
                                    <svg className={css.icon} width="32" height="33">
                                        <use xlinkHref="/images/icons.svg#icon-ok"></use>
                                    </svg>
                                    <p>25th floor out of 36</p>
                                </li>
                                <li className={css.item}>
                                    <svg className={css.icon} width="32" height="33">
                                        <use xlinkHref="/images/icons.svg#icon-ok"></use>
                                    </svg>
                                    <p>Offer from the developer</p>
                                </li>
                            </ul>
                        </div>
                        <Image src="/images/plan.jpg" alt="Plan of flat" width={408} height={268}/>
                    </div>
                </div>
                <div className={css.wrapper}>
                    <div className={css.top}>
                        <div className={css.manhattan}>
                            <h3 className={css.subtitle}>RC Manhattan City</h3>
                            <ul className={css.advantages}>
                                <li className={css.text}>
                                    <svg className={css.icon} width="32" height="33">
                                        <use xlinkHref="/images/icons.svg#icon-ok"></use>
                                    </svg>
                                    <p>Multi-level parking lot</p>
                                </li>
                                <li className={css.text}>
                                    <svg className={css.icon} width="32" height="33">
                                        <use xlinkHref="/images/icons.svg#icon-ok"></use>
                                    </svg>
                                    <p>Yard without cars</p>
                                </li>
                                <li className={css.text}>
                                    <svg className={css.icon} width="32" height="33">
                                        <use xlinkHref="/images/icons.svg#icon-ok"></use>
                                    </svg>
                                    <p>No interior decoration</p>
                                </li>
                                <li className={css.text}>
                                    <svg className={css.icon} width="32" height="33">
                                        <use xlinkHref="/images/icons.svg#icon-ok"></use>
                                    </svg>
                                    <p>Monolithic frame house</p>
                                </li>
                                <li className={css.text}>
                                    <svg className={css.icon} width="32" height="33">
                                        <use xlinkHref="/images/icons.svg#icon-ok"></use>
                                    </svg>
                                    <p>36 floors</p>
                                </li>
                                <li className={css.text}>
                                    <svg className={css.icon} width="32" height="33">
                                        <use xlinkHref="/images/icons.svg#icon-ok"></use>
                                    </svg>
                                    <p>Centralized heating</p>
                                </li>
                                <li className={css.text}>
                                    <svg className={css.icon} width="32" height="33">
                                        <use xlinkHref="/images/icons.svg#icon-ok"></use>
                                    </svg>
                                    <p>Walls made of ceramic red brick</p>
                                </li>
                                <li className={css.text}>
                                    <svg className={css.icon} width="32" height="33">
                                        <use xlinkHref="/images/icons.svg#icon-ok"></use>
                                    </svg>
                                    <p>Insulated with mineral wool</p>
                                </li>
                                <li className={css.text}>
                                    <svg className={css.icon} width="32" height="33">
                                        <use xlinkHref="/images/icons.svg#icon-ok"></use>
                                    </svg>
                                    <p>Preliminary contract of sale of the apartment</p>
                                </li>
                                <li className={css.text}>
                                    <svg className={css.icon} width="32" height="33">
                                        <use xlinkHref="/images/icons.svg#icon-ok"></use>
                                    </svg>
                                    <p>Ceiling height 3 m</p>
                                </li>
                                <li className={css.text}>
                                    <svg className={css.icon} width="32" height="33">
                                        <use xlinkHref="/images/icons.svg#icon-ok"></use>
                                    </svg>
                                    <p>Business class</p>
                                </li>
                                <li className={css.text}>
                                    <svg className={css.icon} width="32" height="33">
                                        <use xlinkHref="/images/icons.svg#icon-ok"></use>
                                    </svg>
                                    <p>1340 apartments</p>
                                </li>
                            </ul>
                        </div>
                        <Image src="/images/map.jpg" alt="Map" width={840} height={704}/>
                    </div>
                    <div className={css.bottom}>
                        <ul className={css.locList}>
                            <li className={css.locItem}>
                                <div className={css.head}>
                                    <svg className={css.locIcon} width="40" height="41">
                                        <use xlinkHref="/images/icons.svg#icon-education"></use>
                                    </svg>
                                    <h3 className={css.heading}>Educational institutions</h3>
                                </div>
                                <div className={css.info}>
                                    <div className={css.paragraph}>
                                        <svg className={css.walk} width="40" height="40">
                                            <use xlinkHref="/images/icons.svg#icon-walk"></use>
                                        </svg>
                                        <p className={css.min}>15 min</p>
                                        <p>School №41</p>
                                    </div>
                                </div>
                            </li>
                            <li className={css.locItem}>
                                <div className={css.head}>
                                    <svg className={css.locIcon} width="40" height="41">
                                        <use xlinkHref="/images/icons.svg#icon-hospital"></use>
                                    </svg>
                                    <h3 className={css.heading}>Hospital</h3>
                                </div>
                                <div className={css.info}>
                                    <div className={css.paragraph}>
                                        <svg className={css.walk} width="40" height="40">
                                            <use xlinkHref="/images/icons.svg#icon-walk"></use>
                                        </svg>
                                        <p className={special}>20 min</p>
                                        <p>Department of Emergency Surgery at the National Children`s Hospital Okhmatdyt</p>
                                    </div>
                                </div>
                            </li>
                            <li className={css.locItem}>
                                <div className={css.head}>
                                    <svg className={css.locIcon} width="40" height="41">
                                        <use xlinkHref="/images/icons.svg#icon-shopping"></use>
                                    </svg>
                                    <h3 className={css.heading}>Shopping centers, shops</h3>
                                </div>
                                <div className={css.info}>
                                    <div className={css.paragraph}>
                                        <svg className={css.walk} width="40" height="40">
                                            <use xlinkHref="/images/icons.svg#icon-walk"></use>
                                        </svg>
                                        <p className={css.min}>7 min</p>
                                        <p>Ant Yapi shopping center</p>
                                    </div>
                                    <div className={css.paragraph}>
                                        <svg className={css.walk} width="40" height="40">
                                            <use xlinkHref="/images/icons.svg#icon-walk"></use>
                                        </svg>
                                        <p className={css.min}>1 min</p>
                                        <p>Zabka</p>
                                    </div>
                                </div>
                            </li>
                            <li className={css.locItem}>
                                <div className={css.head}>
                                    <svg className={css.locIcon} width="40" height="41">
                                        <use xlinkHref="/images/icons.svg#icon-park"></use>
                                    </svg>
                                    <h3 className={css.heading}>Park area</h3>
                                </div>
                                <div className={css.info}>
                                    <div className={css.paragraph}>
                                        <svg className={css.walk} width="40" height="40">
                                            <use xlinkHref="/images/icons.svg#icon-walk"></use>
                                        </svg>
                                        <p className={css.min}>10 min</p>
                                        <p>Dog walking area</p>
                                    </div>
                                    <div className={css.paragraph}>
                                        <svg className={css.walk} width="40" height="40">
                                            <use xlinkHref="/images/icons.svg#icon-walk"></use>
                                        </svg>
                                        <p className={css.min}>15 min</p>
                                        <p>Turgenevskaya Square</p>
                                    </div>
                                </div>
                            </li>
                            <li className={css.locItem}>
                                <div className={css.head}>
                                    <svg className={css.locIcon} width="40" height="41">
                                        <use xlinkHref="/images/icons.svg#icon-bus"></use>
                                    </svg>
                                    <h3 className={css.heading}>Bus and metro stops</h3>
                                </div>
                                <div className={css.info}>
                                    <div className={css.paragraph}>
                                        <svg className={css.walk} width="40" height="40">
                                            <use xlinkHref="/images/icons.svg#icon-walk"></use>
                                        </svg>
                                        <p className={css.min}>4 min</p>
                                        <p>Bus Stop “The central palace of ceremonial events”</p>
                                    </div>
                                    <div className={css.paragraph}>
                                        <svg className={css.walk} width="40" height="40">
                                            <use xlinkHref="/images/icons.svg#icon-walk"></use>
                                        </svg>
                                        <p className={css.min}>15 min</p>
                                        <p>Metro Vydubychi</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={css.like}>
                    <h2 className={css.likeTitle}>It looks like</h2>

                    {/* Тимчасово */}

                    <Offers/>
                    {/* <div>
                        <FlatList/>
                    </div> */}
                </div>
            </main>
        </Layout>
    )
}

export default page
