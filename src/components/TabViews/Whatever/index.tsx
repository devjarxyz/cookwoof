import * as React from 'react';
import exboss from './exboss.jpg';

function Whatever() {
    return (
        <div style={{padding: '10px'}}>
            <h4>you said Whatever, so here's a pic of my exboss trying his damndest to not pour champagne on me. </h4>

            <img src={exboss} style={{maxWidth: '100%', height: 'auto'}}/>
        </div>
    );
}

export default Whatever;