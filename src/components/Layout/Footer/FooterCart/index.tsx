import * as React from 'react';
import { Beer } from '../../../../data/beers/types';
import trashCan from './trash_can.png';

const FooterCart = ({beer, amount}: { beer?: Beer, amount: number}) => {
    return beer ? (
        <div className="footer--beeer-info">
            <div className="footer-beer--info---left-side">   
                <div className="footer-beer--info-img">
                    <div className="img" style={{backgroundImage: `url(${beer.image_url})`}} /> 
                    <p className="footer--beer-name">{beer.name}</p>
                </div>                                 
               
            </div>
            <div className="footer-beer--info---right-side">
                <button name={`minusButton--${beer.id}`}>-</button>
                <h3>{amount}</h3>
                <button name={`plusButton--${beer.id}`} >+</button>
                <button name={`trashButton--${beer.id}`} className="trash" style={{backgroundImage: `url(${trashCan})`}}></button>
            </div>
        </div>
    ) : (
        <div className="footer--beeer-info">
            <div className="footer-beer--info---left-side">   
                <div className="footer-beer--info-img">
                    <h1>X</h1>
                    <p className="footer--beer-name">no beer</p>
                </div>                                 
            
            </div>
            <div className="footer-beer--info---right-side">
                <button name={`minusButton`}>-</button>
                <h3>{amount}</h3>
                <button name={`plusButton`} >+</button>
                <button name={`trashButton`} className="trash" style={{backgroundImage: `url(${trashCan})`}}></button>
            </div>
        </div>
    );
};

export default FooterCart;
