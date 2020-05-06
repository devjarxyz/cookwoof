import * as React from 'react';
import { Beer } from '../../../../../data/beers/types';

interface BrewdogBeerProps {
    beer: Beer;
}

const BrewdogBeer = ({beer}: BrewdogBeerProps) => {
    return (
        <div className="beer-container" onClick={() => console.log('clicked', beer)}>
            <div className="beer-container--image-wrapper">
                {!beer.image_url ? <h3>No Image</h3>:  <img src={beer.image_url} />}
               
            </div>
            <h5>{beer.name}</h5>
        </div>
    );
}
export default BrewdogBeer;