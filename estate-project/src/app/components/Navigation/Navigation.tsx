
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Navigation = () => {
    return (
        <header>
            <div>
                <svg width="72" height="72">
                    <use xlinkHref="/images/icons.svg#icon-logo"></use>
                </svg>
                <nav>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#benefits">Benefits</a></li>
                        <li><a href="#how">How it works</a></li>
                        <li><Link href="/catalogue">Catalogue</Link></li>
                        <li><a href="#footer">Contacts</a></li>
                    </ul>
                </nav>
                <a href="#contacts">Request a call</a>
            </div>
            
        </header>
    )
}

export default Navigation
