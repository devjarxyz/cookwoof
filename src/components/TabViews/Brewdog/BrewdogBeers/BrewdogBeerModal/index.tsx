import * as React from 'react';
import './brewdogbeermodal.css';
import { Beer } from '../../../../../data/beers/types';
import ReactDOM from 'react-dom';

interface BrewdogBeerModalProps {
    beer: Beer;
    close: () => void;
    isActive: boolean;
}

function BrewdogBeerModal ({beer, close, isActive}: BrewdogBeerModalProps) {
    const modalRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        
        if(isActive && modalRef.current) {

            modalRef!.current!.classList.add('active')
            setTimeout(() => {
                
                modalRef!.current!.style.display = 'block';
               
            }, 325);
           
        } else {
           if(modalRef.current){
            modalRef!.current!.classList.remove('active')
            setTimeout(() => {
               
                modalRef!.current!.style.display = 'none';
            }, 325);
           }
           
        }

        return () => {
           
          };
    }, [isActive]);

    return ReactDOM.createPortal(
        <div className="beer-modal" ref={modalRef}>
            <div className="beer-modal-close-button-container">
                <button onClick={() => close()}>Close</button>
            </div>
            <div className="beer-modal--container">
               
            
                <div className="beer-modal--container-info-container--left-child">
                    <h4>{beer.name}</h4>
                    <p>{beer.tagline}</p>
                    <p>{beer.description}</p>
                    <p>{beer.food_pairing}</p>
                </div>
                <div className="beer-modal--container-info-container--right-child">
                    <div className="beer-modal--container-info-container--right-child--image">
                       <div className="img" style={{backgroundImage: `url(${beer.image_url})`}}/>
                    </div>
                    <div className="beer-modal--container-info-container--right-child--button">
                        <button>ADD TO CART</button>
                    </div>
                </div>
                
            </div>
        </div>, document.getElementById('root') as Element
    );
}

export default BrewdogBeerModal;