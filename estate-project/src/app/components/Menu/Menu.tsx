import Link from 'next/link'
import React from 'react'

import css from './Menu.module.css';

const Menu = () => {

    return (
        <div className={css.container}>
            <ul className={css.list}>
                <li className={css.item}>
                    <Link href="/">Home</Link>
                </li>
                <li className={css.item}>
                    <svg className={css.icon}>
                        <use xlinkHref="./images/icons.svg#icon-arrow" width="20" height="20"></use>
                    </svg>
                </li>
                <li className={css.item}>
                    <Link href="/catalogue">Catalogue</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu
