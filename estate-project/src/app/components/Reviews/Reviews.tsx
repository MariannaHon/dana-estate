import React from 'react'
import css from './Reviews.module.css';

const Reviews = () => {
    return (
        <section className={css.section}>
            <h2 className={css.hide}>Share your opinion</h2>
            <div className={css.container}>
                <button className={css.left}>
                    <svg width="40" height="40">
                        <use xlinkHref="./images/icons.svg#icon-right"></use>
                    </svg>
                </button>
                <ul className={css.list}>
                    <li className={css.item}>
                        <div className={css.wrapper}>
                            <h3 className={css.title}>Melina</h3>
                            <div className={css.stars}>
                                <svg className={css.icon} width="40" height="40">
                                    <use xlinkHref="./images/icons.svg#icon-star"></use>
                                </svg>
                                <svg className={css.icon} width="40" height="40">
                                    <use xlinkHref="./images/icons.svg#icon-star"></use>
                                </svg>
                                <svg className={css.icon} width="40" height="40">
                                    <use xlinkHref="./images/icons.svg#icon-star"></use>
                                </svg>
                                <svg className={css.icon} width="40" height="40">
                                    <use xlinkHref="./images/icons.svg#icon-star"></use>
                                </svg>
                                <svg className={css.icon} width="40" height="40">
                                    <use xlinkHref="./images/icons.svg#icon-star"></use>
                                </svg>
                            </div>
                        </div>
                        <p className={css.text}>I would like to thank the Dana.Nieruchomości for the excellent cooperation in the sale of the apartment. The professionalism of the team and the manager Andrew ensured a quick and hassle-free process. I recommend them as a reliable partner in real estate!</p>
                    </li>
                    <li className={css.item}>
                        <div className={css.wrapper}>
                            <h3 className={css.title}>Lewis</h3>
                            <div className={css.stars}>
                                <svg className={css.icon} width="40" height="40">
                                    <use xlinkHref="./images/icons.svg#icon-star"></use>
                                </svg>
                                <svg className={css.icon} width="40" height="40">
                                    <use xlinkHref="./images/icons.svg#icon-star"></use>
                                </svg>
                                <svg className={css.icon} width="40" height="40">
                                    <use xlinkHref="./images/icons.svg#icon-star"></use>
                                </svg>
                                <svg className={css.icon} width="40" height="40">
                                    <use xlinkHref="./images/icons.svg#icon-star"></use>
                                </svg>
                                <svg className={css.icon} width="40" height="40">
                                    <use xlinkHref="./images/icons.svg#icon-star"></use>
                                </svg>
                            </div>
                        </div>
                        <p className={css.text}>I would like to express my gratitude to the Dana. Nieruchomości for the excellent cooperation in the sale of our apartments. Thanks to the professional team and manager Ilia, the process went quickly and smoothly. You helped us find reliable buyers and ensured effective communication. We recommend your agency as a reliable partner in real estate. Thank you for your excellent work!</p>
                    </li>
                </ul>
                <button className={css.right}>
                    <svg width="40" height="40">
                        <use xlinkHref="./images/icons.svg#icon-right"></use>
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default Reviews
