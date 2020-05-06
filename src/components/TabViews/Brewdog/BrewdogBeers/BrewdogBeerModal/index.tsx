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
                <div className="beer-modal--wrapper-button-container">

                </div>
                <div className="beer-modal--wrapper-info-container">
                    <div className="beer-modal--wrapper-info-container--left-child">

                    </div>
                    <div className="beer-modal--wrapper-info-container--right-child">

                    </div>
                </div>
            </div>
        </div>
    );
}