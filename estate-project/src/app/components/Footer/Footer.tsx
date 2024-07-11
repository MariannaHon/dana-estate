
import React from 'react'
import css from './Footer.module.css'
import Link from 'next/link';
import classNames from 'classnames';

const Footer = () => {

    const last = classNames(css.item, css.last);

    return (
        <footer className={css.footer}>
            <div className={css.container}>
                <div className={css.box}>
                    <svg className={css.logo} width="270" height="274">
                        <use xlinkHref="./images/icons.svg#icon-logo-white"></use>
                    </svg>
                </div>
                <div className={css.wrapper}>
                    <div className={css.nav}>
                        <ul className={css.list}>
                            <li className={css.item}><a className={css.link} href="#hero">Home</a></li>
                            <li className={css.item}><a className={css.link} href="#about">About us</a></li>
                            <li className={css.item}><a className={css.link} href="#benefits">Benefits</a></li>
                            <li className={css.item}><a className={css.link} href="#how">How it works</a></li>
                            <li className={css.item}><Link className={css.link} href="/catalogue">Catalogue</Link></li>
                            <li className={css.item}><a className={css.link} href="#contacts">Contacts</a></li>
                        </ul>
                        <ul className={css.list}>
                            <li className={css.item}><a className={css.link} href="">Terms of Use</a></li>
                            <li className={css.item}><a className={css.link} href="">Privacy & Policy</a></li>
                            <li className={css.item}><a className={css.link} href="">Cookie Policy </a></li>
                        </ul>
                        <ul className={css.list}>
                            <li className={last}>
                                <p>+1234567890</p>
                            </li>
                            <li className={last}>
                                <p>Poland, Warsaw, st. Street, 12</p>
                            </li>
                            <li className={last}>
                                <p>Dana.Nieruchomości@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className={css.follow}>
                        <h2 className={css.title}>Follow Dana.Nieruchomości in social</h2>
                        <div className={css.icons}>
                            <svg className={css.icon} width="40" height="40">
                                <use xlinkHref="./images/icons.svg#icon-instagram"></use>
                            </svg>
                            <svg className={css.icon} width="40" height="40">
                                <use xlinkHref="./images/icons.svg#icon-twitter"></use>
                            </svg>
                            <svg className={css.icon} width="40" height="40">
                                <use xlinkHref="./images/icons.svg#icon-facebook"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.bottom}>
                <p>All rights reserved</p>
                <p>© 2024 Dana.Nieruchomości</p>
            </div>
        </footer>
    )
}

export default Footer
