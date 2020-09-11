import React from 'react'
import "./AppHeader.css";

export default function AppHeader() {
    return <header>
        <h1 className="header__spotlight">
            <span className="spotlight__text spotlight__text--black">UNIVERSAL</span>
            <span className="spotlight__text spotlight__text--white">Headphones</span>
        </h1>
        <div className="header__actions">
            <a href="#" onClick="" className="header__link header__link--info">Buy for $ 68.99</a>
            <a href="#register" className="header__link header__link--success">Register</a>
        </div>
    </header>
}