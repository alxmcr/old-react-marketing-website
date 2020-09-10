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
            title: "Feature 1",
            description: "Great feature 1",
            image: "https://images.unsplash.com/photo-1505751104546-4b63c93054b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        }, {
            id: 2,
            title: "Feature 2",
            description: "Great feature 1",
            image: "https://images.unsplash.com/photo-1551205648-1f8a635098ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        }, {
            id: 3,
            title: "Feature 1",
            description: "Great feature 1",
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