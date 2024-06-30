
import React from 'react'
import css from './Footer.module.css'
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div>
                <svg width="270" height="274">
                    <use xlinkHref="./images/icons.svg#icon-logo"></use>
                </svg>
            </div>
            <div>
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#benefits">Benefits</a></li>
                    <li><a href="#how">How it works</a></li>
                    <li><Link href="/catalogue">Catalogue</Link></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
                <ul>
                    <li><a href="">Terms of Use</a></li>
                    <li><a href="">Privacy & Policy</a></li>
                    <li><a href="">Cookie Policy </a></li>
                </ul>
                <p>+1234567890</p>
                <p>Poland, Warsaw, st. Street, 12</p>
                <p>Dana.Nieruchomości@gmail.com</p>
                <h2>Follow Dana.Nieruchomości in social</h2>
                <svg width="40" height="40">
                    <use xlinkHref="./images/icons.svg#icon-instagram"></use>
                </svg>
                <svg width="40" height="40">
                    <use xlinkHref="./images/icons.svg#icon-twitter"></use>
                </svg>
                <svg width="40" height="40">
                    <use xlinkHref="./images/icons.svg#icon-facebook"></use>
                </svg>
            </div>
            <p>All rights reserved</p>
            <p>© 2024 Dana.Nieruchomości</p>
        </footer>
    )
}

export default Footer
