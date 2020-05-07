import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Footer () {
    const initialFooterSizeState = {fullFooter: false, halfFooter: false };
    const footerRef = React.useRef<HTMLDivElement>(null);
    const [ footerShow, setFooterShow ] = React.useState(initialFooterSizeState);
   
    React.useEffect(() => {
        if(footerShow.halfFooter && !footerShow.fullFooter) {
            footerRef.current?.classList.add('half');
            footerRef.current?.classList.remove('full');
        } else if (!footerShow.halfFooter && footerShow.fullFooter) {
            footerRef.current?.classList.remove('half');
            footerRef.current?.classList.add('full');
            footerRef.current?.classList.remove('half');
        }
    }, [ footerShow ])

    const touchStartHandler = (event: React.TouchEvent<HTMLElement>) => {
        console.log('start', event.touches);
    }

    const touchEndHandler = (event: React.TouchEvent<HTMLElement>) => {
        console.log('end', event.changedTouches);
    }

    const touchMoveHandler = (event: React.TouchEvent<HTMLElement>) => {
        console.log('move', event.changedTouches);
    }

    return(
        <section className="footer" ref={footerRef} 
        onTouchStart={(e) => touchStartHandler(e)}
        onTouchEnd={(e) => touchEndHandler(e)}
        onTouchMove={(e) => touchMoveHandler(e)}>
            <div className="inner">
                <header>
                   <hr style={{width: '5%', margin: '2px auto'}} onClick={() => {console.log('hej fix me')}}/>
                   <p><FontAwesomeIcon icon={faShoppingCart} /> Shopping Cart </p>
                </header>
                
                <div className="copyright">
                    &copy; cookwoof. All rights reserved.
                </div>
            </div>
           
        </section>
    );
}

export default Footer;