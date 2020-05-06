import * as React from 'react';
import { Beer } from '../../../../data/beers/types';

interface BrewdogBeersProps {
    beers?: Beer[];
    loadingBeers: boolean;
}

const BrewdogBeers = (props: BrewdogBeersProps) => {

    return !props.loadingBeers && props.beers ? (
        <div>{props.beers?.length}</div>
    ) : 
    (
        <div className="loading" >loading...</div>
    )
}

export default BrewdogBeers;