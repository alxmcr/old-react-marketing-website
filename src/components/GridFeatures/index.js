import React, { useState, useEffect } from 'react'
import FeatureCard from '../FeatureCard';
import "./GridFeatures.css"


export default function GridFeatures() {

    // State
    const [features, setFeatures] = useState([]);

    // Effect
    useEffect(() => {
        const featuresApi = [{
            id: 1,
            title: "Noise Cancelling",
            description: "Reduce unwanted ambient sounds using active noise control",
            image: "https://images.unsplash.com/photo-1572932491814-4833690788ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        }, {
            id: 2,
            title: "Simple Touch Controls",
            description: "All controls (On/Off, play, pause, next/previous track, volume)",
            image: "https://images.unsplash.com/photo-1563210231-e3cf403d1292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        }, {
            id: 3,
            title: "Energy",
            description: "Up to 20 hours battery life per charge",
            image: "https://images.unsplash.com/photo-1505751104546-4b63c93054b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        }];

        setFeatures(featuresApi);
    }, [])

    return <div className="features">
        {
            features.map(({ id, title, description, image }) =>
                <FeatureCard
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    image={image}
                />
            )
        }
    </div>
}