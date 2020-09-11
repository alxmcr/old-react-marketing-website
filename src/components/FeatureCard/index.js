import React from 'react'
import "./FeatureCard.css"

export default function FeatureCard({ id, title, description, image }) {
    return <div className="feature">
        <picture className="feature__picture">
            <img className="feature__image" src={image} alt={title} />
        </picture>
        <div className="feature__body">
            <h3 className="feature__title">{title}</h3>
            <p className="feature__description">{description}</p>
        </div>
        <div className="feature__actions">
            <a className="feature__button" href="#" onClick="">See more</a>
        </div>
    </div>
}