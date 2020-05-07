import * as React from 'react';
import './brewdogbeer.css';
import { Beer } from '../../../../../data/beers/types';

interface BrewdogBeerModalProps {
    beer: Beer;
}

const BrewdogBeerModal = ({beer}: BrewdogBeerModalProps) => {

    return (
        <div className="beer-modal">
            <div className="beer-modal--wrapper">
                <div className="beer-modal--wrapper-close-button-container">
                    <button onClick={() => console.log('cloising')}>Close</button>
                </div>
                <div className="beer-modal--wrapper-info-container">
                    <div className="beer-modal--wrapper-info-container--left-child">
                        <h4>{beer.name}</h4>
                        <p>{beer.tagline}</p>
                        <p>{beer.description}</p>
                        <p>{beer.food_pairing}</p>
                    </div>
                    <div className="beer-modal--wrapper-info-container--right-child">
                        <div className="beer-modal--wrapper-info-container--right-child--image">

                        </div>
                        <div className="beer-modal--wrapper-info-container--right-child--button">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}