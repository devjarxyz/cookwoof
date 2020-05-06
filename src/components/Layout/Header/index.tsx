import * as React from 'react';

function Header() {

    return (
        <div className="header">
            <div className="header--title">
                <h1>Demo App</h1>
            </div>
            <nav className="header--nav">
                <div className="header--nav--item"><h3>all</h3></div>
                <div className="header--nav--item"><h3>food</h3></div>
                <div className="header--nav--item"><h3>settings</h3></div>
                <div className="header--nav--item"><h3>search</h3></div>
                <div className="header--nav--animation header--nav--start-home" />
            </nav>
        </div>
        
    );
}

export default Header;