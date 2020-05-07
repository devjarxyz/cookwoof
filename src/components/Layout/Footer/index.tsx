import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Footer () {
    const initialFooterSizeState = {halfFooter: false, fullFooter: false };
    const footerRef = React.useRef<HTMLDivElement>(null);
    const [ footerShow, setFooterShow ] = React.useState(initialFooterSizeState);
    const [ startPos, setStartPos ] = React.useState(0);
   
  
    
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
        event.preventDefault();
        
        if((event.target as any).name === 'plusButton') {
            console.log('adding more beer');
        } else if ((event.target as any).name === 'minusButton') {
            console.log('removing beer, sad face');
        } else {
            setStartPos(event.touches[0].clientY);
        }
        

    }

    const touchEndHandler = (event: React.TouchEvent<HTMLElement>) => {
        event.preventDefault();
        const touch = event.changedTouches[0];
        const swipeUp = touch.clientY < startPos;
        const absY = Math.abs(touch.clientY - startPos);
        console.log(absY);
        if(absY > minDistance) {
           
            if(swipeUp){
                console.log('up')
                setFooterShow({fullFooter: true, halfFooter: false});
              
            } else {
                console.log('down   ')
                setFooterShow({fullFooter: false, halfFooter: false});
            }
        }
        console.log('end', event.changedTouches);
    }

    const touchMoveHandler = (event: React.TouchEvent<HTMLElement>) => {
        event.preventDefault();
        console.log('move', event.changedTouches);
    }

    return(
        <section className="footer" ref={footerRef} 
        >
            <div className="inner">
                <header  onClick={() => { console.log('clicked'); setFooterShow({fullFooter: false, halfFooter: true });} }>
                   <hr style={{width: '5%', margin: '2px auto'}}/>
                   <p><FontAwesomeIcon icon={faShoppingCart} /> Shopping Cart </p>
                </header>
                <div onTouchStart={(e) => touchStartHandler(e)}
                    onTouchEnd={(e) => touchEndHandler(e)}
                    onTouchMove={(e) => touchMoveHandler(e)}>
                    some data bal blalb alblb ba
                    <div>
                        <button name="minusButton" >click me</button>
                        <button name="plusButton" >click me</button>
                    </div>
                </div>
                <div className="copyright" >
                    &copy; cookwoof. All rights reserved.
                </div>
            </div>
           
        </section>
    );
}

export default Footer;