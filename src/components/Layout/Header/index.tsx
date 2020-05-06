import * as React from 'react';

function Header() {

    return (
        <div className="header">
            <nav className="header--nav">
                <div className="header--nav--item">icon food</div>
                <div className="header--nav--item">icon all</div>
                <div className="header--nav--item">icon settings</div>
                <div className="header--nav--item">icon search</div>
                <div className="header--nav--animation header--nav--start-home" />
            </nav>
        </div>
        
    );
}

export default Header;