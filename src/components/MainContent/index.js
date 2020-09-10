import React from 'react';
import "./MainContent.css"
import GridFeatures from '../GridFeatures';

export default function MainContent(){
    return <main>
        <h2 className="main__title">Features</h2>
        <GridFeatures />
    </main>
}