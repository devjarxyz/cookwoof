import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Footer () {
    

    return(
        <section className="footer">
            <div className="inner">
                <header>
                   <hr style={{width: '5%', margin: '2px auto'}} onClick={()}/>
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