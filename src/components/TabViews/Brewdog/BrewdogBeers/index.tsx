import * as React from 'react';
import { Beer } from '../../../../data/beers/types';
import BrewdogBeer from './BrewdogBeer';
import './brewdogbeer.css';

interface BrewdogBeersProps {
    beers?: Beer[];
    loadingBeers: boolean;
}

const BrewdogBeers = (props: BrewdogBeersProps) => {

    
    return !props.loadingBeers && props.beers ? (
        <div className="brewdog-beers">{ props.beers.map((beer: Beer) => {
            return <div key={beer.id} className="brewdog-beers--beer-wrapper">
                <BrewdogBeer beer={beer} />
            </div>;
            
        })}</div>
    ) : 
    (
        <div className="loading" >loading...</div>
    )
}

export default BrewdogBeers;