import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import "./AppFooter.css"

export default function AppFooter() {
    return <footer>
        <div className="footer__row">
            <span className="footer__text">Made with</span>
            <span className="footer__icon">
                <FontAwesomeIcon icon={faHeart} />
            </span>
            <span className="footer__text">in Latam</span>
        </div>
        <div className="footer__row footer__row--repository">
            <a href="https://github.com/alxmcr/react-marketing-website" className="footer__link">
                <span className="footer__text">Code</span>
                <span className="footer__icon">
                    <FontAwesomeIcon icon={faGithub} />
                </span>
            </a>
        </div>
    </footer>
}