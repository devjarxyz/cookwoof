import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

import './layout.css';
const Layout: React.FunctionComponent<any> = (
    props
  ) => {

    return (
        <>
            <Header />

            {props.children}

            <Footer />
        </>
    );

}
export default Layout;