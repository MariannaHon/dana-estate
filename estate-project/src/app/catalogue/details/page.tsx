
import React from 'react'
import Image from "next/image";
import Layout from '@/app/components/Layout/Layout';
import FlatList from '@/app/components/FlatList/FlatList';

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
                <Image src="/images/plan.jpg" alt="Plan of flat" width={408} height={268}/>
            </div>
            <div>
                <div>
                    <h3>RC Manhattan City</h3>
                    <ul>
                        <li>
                            <svg width="32" height="33">
                                <use xlinkHref="/images/icons.svg#icon-ok"></use>
                            </svg>
                            <p>Multi-level parking lot</p>
                        </li>
                        <li>
                            <svg width="32" height="33">
                                <use xlinkHref="/images/icons.svg#icon-ok"></use>
                            </svg>
                            <p>Yard without cars</p>
                        </li>
                        <li>
                            <svg width="32" height="33">
                                <use xlinkHref="/images/icons.svg#icon-ok"></use>
                            </svg>
                            <p>No interior decoration</p>
                        </li>
                        <li>
                            <svg width="32" height="33">
                                <use xlinkHref="/images/icons.svg#icon-ok"></use>
                            </svg>
                            <p>Monolithic frame house</p>
                        </li>
                        <li>
                            <svg width="32" height="33">
                                <use xlinkHref="/images/icons.svg#icon-ok"></use>
                            </svg>
                            <p>36 floors</p>
                        </li>
                        <li>
                            <svg width="32" height="33">
                                <use xlinkHref="/images/icons.svg#icon-ok"></use>
                            </svg>
                            <p>Centralized heating</p>
                        </li>
                        <li>
                            <svg width="32" height="33">
                                <use xlinkHref="/images/icons.svg#icon-ok"></use>
                            </svg>
                            <p>Walls made of ceramic red brick</p>
                        </li>
                        <li>
                            <svg width="32" height="33">
                                <use xlinkHref="/images/icons.svg#icon-ok"></use>
                            </svg>
                            <p>Insulated with mineral wool</p>
                        </li>
                        <li>
                            <svg width="32" height="33">
                                <use xlinkHref="/images/icons.svg#icon-ok"></use>
                            </svg>
                            <p>Preliminary contract of sale of the apartment</p>
                        </li>
                        <li>
                            <svg width="32" height="33">
                                <use xlinkHref="/images/icons.svg#icon-ok"></use>
                            </svg>
                            <p>Ceiling height 3 m</p>
                        </li>
                        <li>
                            <svg width="32" height="33">
                                <use xlinkHref="/images/icons.svg#icon-ok"></use>
                            </svg>
                            <p>Business class</p>
                        </li>
                        <li>
                            <svg width="32" height="33">
                                <use xlinkHref="/images/icons.svg#icon-ok"></use>
                            </svg>
                            <p>1340 apartments</p>
                        </li>
                    </ul>
                </div>
                <Image src="/images/map.jpg" alt="Map" width={840} height={704}/>
            </div>
            <div>
                <div>
                    <svg width="40" height="41">
                        <use xlinkHref="/images/icons.svg#icon-education"></use>
                    </svg>
                    <h3>Educational institutions</h3>
                    <svg width="40" height="40">
                        <use xlinkHref="/images/icons.svg#icon-walk"></use>
                    </svg>
                    <p>15 min</p>
                    <p>School №41</p>
                </div>
                <div>
                    <svg width="40" height="41">
                        <use xlinkHref="/images/icons.svg#icon-shopping"></use>
                    </svg>
                    <h3>Shopping centers, shops</h3>
                    <svg width="40" height="40">
                        <use xlinkHref="/images/icons.svg#icon-walk"></use>
                    </svg>
                    <p>7 min</p>
                    <p>Ant Yapi shopping center</p>
                    <svg width="40" height="40">
                        <use xlinkHref="/images/icons.svg#icon-walk"></use>
                    </svg>
                    <p>1 min</p>
                    <p>Zabka</p>
                </div>
                <div>
                    <svg width="40" height="41">
                        <use xlinkHref="/images/icons.svg#icon-bus"></use>
                    </svg>
                    <h3>Bus and metro stops</h3>
                    <svg width="40" height="40">
                        <use xlinkHref="/images/icons.svg#icon-walk"></use>
                    </svg>
                    <p>4 min</p>
                    <p>Bus Stop “The central palace of ceremonial events”</p>
                    <svg width="40" height="40">
                        <use xlinkHref="/images/icons.svg#icon-walk"></use>
                    </svg>
                    <p>15 min</p>
                    <p>Metro Vydubychi</p>
                </div>
                <div>
                    <svg width="40" height="41">
                        <use xlinkHref="/images/icons.svg#icon-hospital"></use>
                    </svg>
                    <h3>Hospital</h3>
                    <svg width="40" height="40">
                        <use xlinkHref="/images/icons.svg#icon-walk"></use>
                    </svg>
                    <p>20 min</p>
                    <p>Department of Emergency Surgery at the National Children`s Hospital Okhmatdyt</p>
                </div>
                <div>
                    <svg width="40" height="41">
                        <use xlinkHref="/images/icons.svg#icon-park"></use>
                    </svg>
                    <h3>Park area</h3>
                    <svg width="40" height="40">
                        <use xlinkHref="/images/icons.svg#icon-walk"></use>
                    </svg>
                    <p>10 min</p>
                    <p>Dog walking area</p>
                    <svg width="40" height="40">
                        <use xlinkHref="/images/icons.svg#icon-walk"></use>
                    </svg>
                    <p>15 min</p>
                    <p>Turgenevskaya Square</p>
                </div>
                <div>
                    <h2>It looks like</h2>
                    <div>
                        <FlatList/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default page
