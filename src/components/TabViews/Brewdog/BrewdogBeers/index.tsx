import * as React from 'react';
import { Beer } from '../../../../data/beers/types';

interface BrewdogBeersProps {
    beers: Beer[];
}

const BrewdogBeers = (props: BrewdogBeersProps) => {

    return props.beers.length > 0 ? (
        <div>{props.beers.length}</div>
    ) : 
    (
        <div className="loading" >loading...</div>
    )
}