
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

import css from './Navigation.module.css';

const Navigation = () => {
    return (
        <header>
            <div className={css.container}>
                <svg width="72" height="72">
                    <use xlinkHref="/images/icons.svg#icon-logo"></use>
                </svg>
                <nav className={css.nav}>
                    <ul className={css.list}>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#benefits">Benefits</a></li>
                        <li><a href="#how">How it works</a></li>
                        <li><Link href="/catalogue">Catalogue</Link></li>
                        <li><a href="#footer">Contacts</a></li>
                    </ul>
                </nav>
                <a href="#contacts" className={css.btn}>Request a call</a>
            </div>
            
        </header>
    )
}

export default Navigation
