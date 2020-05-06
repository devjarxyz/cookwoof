import * as React from 'react';

function Header() {

    return (
        <div className="header">
            <div className="header--title">
                <h1>Demo App</h1>
            </div>
            <nav className="header--nav">
                <div className="header--nav--item"><span><h4>all</h4></span></div>
                <div className="header--nav--item"><span><h4>food</h4></span></div>
                <div className="header--nav--item"><span><h4>settings</h4></span></div>
                <div className="header--nav--item"><span><h4>search</h4></span></div>
                <div className="header--nav--animation header--nav--start-home " />
            </nav>
        </div>
        
    );
}

export default Header;