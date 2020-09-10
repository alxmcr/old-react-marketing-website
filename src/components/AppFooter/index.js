import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import "./AppFooter.css"

export default function AppFooter() {
    return <footer>
        <span className="footer__text">Made with</span>
        <span className="footer__icon">
            <FontAwesomeIcon icon={faHeart} />
        </span>
        <span className="footer__text">in Latam</span>
    </footer>
}