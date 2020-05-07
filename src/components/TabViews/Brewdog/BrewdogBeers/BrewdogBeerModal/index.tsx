import * as React from 'react';
import './brewdogbeermodal.css';
import { Beer } from '../../../../../data/beers/types';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTheBeer } from '../../../../../data/beers/actions';

interface BrewdogBeerModalProps {
    beer: Beer;
    close: () => void;
    isActive: boolean;
    addBeer: (beer: Beer) => void;
}

function BrewdogBeerModal ({beer, close, isActive, addBeer}: BrewdogBeerModalProps) {
    const modalRef = React.useRef<HTMLDivElement>(null);
    const [ showfullDesc, setShowFulldesc ] = React.useState(false);
    const [ showfullPairing, setShowFullPairing ] = React.useState(false);

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
    
    const getdescTextElement = (text: string) => {
            return text && text.length > 20 && !showfullDesc ? (
                <p onClick={() => setShowFulldesc(prev => true)}>{text.substring(0, 20)} [show more]</p>
            ) : (
                <p onClick={() => setShowFulldesc(prev => false)}>{text}</p>
            );
    };
    const getfoodTextElement = (text: string[]) => {
        if(text) {
            let t = text.join(' ');
            return t && t.length > 20 && !showfullPairing ? (
                
                <p onClick={() => setShowFullPairing(prev => true)}>{text[0].substring(0, 20)} [show more]</p>
            ) : (
                <p onClick={() => setShowFullPairing(prev => false)}>{text}</p>
            );
        } else {
            return null;
        }
        
    };

    const addBeerHandler = (beer: Beer) => {
        addBeer(beer);
        close();
    }

    return ReactDOM.createPortal(
        <div className="beer-modal" ref={modalRef}>
            <div className="beer-modal-close-button-container">
                <button onClick={() => close()}>Close</button>
            </div>
            <div className="beer-modal--container">
               
            
                <div className="beer-modal--container-info-container--left-child">
                    <h4>{beer.name}</h4>
                    <p>{beer.tagline}</p>
                    <p>{beer.abv}</p>
                    {getdescTextElement(beer.description)}
                    {getfoodTextElement(beer.food_pairing)}
                   
                </div>
                <div className="beer-modal--container-info-container--right-child">
                    <div className="beer-modal--container-info-container--right-child--image">
                       <div className="img" style={{backgroundImage: `url(${beer.image_url})`}}/>
                    </div>
                    <div className="beer-modal--container-info-container--right-child--button">
                        <button onClick={() => addBeerHandler(beer)}>ADD TO CART</button>
                    </div>
                </div>
                
            </div>
        </div>, document.getElementById('root') as Element
    );
}

const mapDispatchToProps = (dispatch: any) => ({
    addBeer: bindActionCreators(addTheBeer, dispatch)
})

export default connect(null, mapDispatchToProps)(BrewdogBeerModal);