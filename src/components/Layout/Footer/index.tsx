import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { ApplicationState } from '../../../data/root-reducer';
import { Cart, Beer } from '../../../data/beers/types';
import { bindActionCreators } from 'redux';
import { plusMoreBeer, minusLessBeer, removeTheBeer } from '../../../data/beers/actions';
import FooterCart from './FooterCart';

interface FooterProps {
    cart: Cart[];
    plusBeer: (beer: Beer) => void;
    minusBeer: (beer: Beer) => void;
    removeBeer: (beer: Beer) => void;

}

function Footer ({ cart, plusBeer, minusBeer, removeBeer}: FooterProps) {
    const initialFooterSizeState = {halfFooter: false, fullFooter: false };
    const footerRef = React.useRef<HTMLDivElement>(null);
    const [ footerShow, setFooterShow ] = React.useState(initialFooterSizeState);
    const [ startPos, setStartPos ] = React.useState(0);
    const [ usedButton, setUsedButton ] = React.useState(false);
  
    
    const minDistance = 20;

    React.useEffect(() => {

        if(footerShow.halfFooter) {
            footerRef.current?.classList.remove('full');
            footerRef.current?.classList.add('half');            
        } else if (footerShow.fullFooter) {
            footerRef.current?.classList.remove('half');
            footerRef.current?.classList.add('full');
        } else if(!footerShow.fullFooter && !footerShow.halfFooter) {
            footerRef.current?.classList.remove('half');
            footerRef.current?.classList.remove('full');
        }
    }, [ footerShow ])

    const touchStartHandler = (event: React.TouchEvent<HTMLElement>) => {
    
        let name: string = (event.target as any).name;
       
        if(name && name.includes('--')) {
            
            if(name.includes('plus')) {
                
                let beer: Beer = cart.find((item) => item.beer.id === parseInt(name.split('--')[1]))?.beer!;
                
                plusBeer(beer!);
                
            setUsedButton(true);
        
            } else if (name.includes('minus')) {
                let beer: Beer = cart.find((item) => item.beer.id === parseInt(name.split('--')[1]))?.beer!;
               
                minusBeer(beer!);
               
            setUsedButton(true);
        
            } else if (name.includes('trash')) {
                let beer: Beer = cart.find((item) => item.beer.id === parseInt(name.split('--')[1]))?.beer!;
              
                removeBeer(beer!);
                
            setUsedButton(true);
        
            }
        } else {
               
                setUsedButton(false);
               setStartPos(event.touches[0].clientY);
           }

    }

    const touchEndHandler = (event: React.TouchEvent<HTMLElement>) => {

        let name: string = (event.target as any).name;
        if(name || usedButton) {
            return;
        }
     
        const touch = event.changedTouches[0];
        //compare position, figure if its up or down
        const swipeUp = touch.clientY < startPos;
        const absY = Math.abs(touch.clientY - startPos);
      
        if(absY > minDistance) {
           
            if(swipeUp){
               
                setFooterShow({fullFooter: true, halfFooter: false});
              
            } else {
               
                setFooterShow({fullFooter: false, halfFooter: false});
            }
        }
       
    }

    const touchMoveHandler = (event: React.TouchEvent<HTMLElement>) => {
        event.preventDefault();
       
    }

    return(
        <section className="footer" ref={footerRef} 
        >
            <div className="inner">
                <header  onClick={() => { setFooterShow({fullFooter: false, halfFooter: !footerShow.halfFooter });}} style={{margin: '4px 0'}}>
                   <hr style={{width: '5%', margin: '2px auto'}}/>
                   <p><FontAwesomeIcon icon={faShoppingCart} /> Shopping Cart </p>
                </header>
                <div onTouchStart={(e) => touchStartHandler(e)}
                    onTouchEnd={(e) => touchEndHandler(e)}
                    onTouchMove={(e) => touchMoveHandler(e)}
                    style={{margin: '20px 0', width: '100%', height: '100%'}}
                >
                    { cart.length > 0 && cart.map((item) => {
                        
                        return <React.Fragment key={item.beer.id}><FooterCart beer={item.beer} amount={item.amount} /></React.Fragment>
                    })} 
                    { cart.length === 0 && 
                        <FooterCart beer={undefined} amount={0} />
                    }
                    <div className="copyright" >
                        &copy; cookwoof. All rights reserved.
                    </div>
                </div>
                
            </div>
           
        </section>
    );
}

const mapDispatchToProps = (dispatch: any) => ({
    plusBeer: bindActionCreators(plusMoreBeer, dispatch),
    minusBeer: bindActionCreators(minusLessBeer, dispatch),
    removeBeer: bindActionCreators(removeTheBeer, dispatch)

});

const mapAppStateToProps = (state: ApplicationState) => ({
    cart: state.brewdogBeers.cart
});

export default connect(mapAppStateToProps, mapDispatchToProps)(Footer);