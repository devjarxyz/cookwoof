import * as React from 'react';
import { ApplicationState } from '../../../data/root-reducer';
import { setCurrentTab } from '../../../data/beers/actions';
import { connect } from 'react-redux';
import { TabTypes } from '../../../data/beers/types';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer, faCog, faGhost, faSearch } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
    currentTab: string;
    setTab: (tab: TabTypes) => void;
}

function Header(props: HeaderProps) {
    React.useEffect(() =>{
       
    }, [props.currentTab])

    const setTab = (tab: TabTypes) => {
      
        props.setTab(tab);
    }
    return (
        <div className="header">
            <div className="header--title">
                <h1>Demo App</h1>
            </div>
            <nav className="header--nav">
                <div className={`header--nav--item ${props.currentTab === TabTypes.BREWDOG_TAB ? 'active': ''}`} onClick={() => setTab(TabTypes.BREWDOG_TAB)} ><span><FontAwesomeIcon icon={faBeer} style={{color: 'inherit', fontSize: '2.5em', paddingBottom: '6px'}} /></span></div>
                <div className={`header--nav--item ${props.currentTab === TabTypes.WHATEVER_TAB ? 'active': ''}`} onClick={() => setTab(TabTypes.WHATEVER_TAB)}><span><FontAwesomeIcon icon={faGhost} style={{color: 'inherit', fontSize: '3em', paddingBottom: '6px'}} /></span></div>
                <div className={`header--nav--item ${props.currentTab === TabTypes.SETTINGS_TAB ? 'active': ''}`} onClick={() => setTab(TabTypes.SETTINGS_TAB)}><span><FontAwesomeIcon icon={faCog} style={{color: 'inherit', fontSize: '3em', paddingBottom: '6px'}} /></span></div>
                <div className={`header--nav--item ${props.currentTab === TabTypes.SEARCH_TAB ? 'active': ''}`} onClick={() => setTab(TabTypes.SEARCH_TAB)}><span><FontAwesomeIcon icon={faSearch} style={{color: 'inherit', fontSize: '3em', paddingBottom: '6px'}} /></span></div>
                <div className="header--nav--animation header--nav--start-home " />
            </nav>
            
        </div>
        
    );
}

const mapAppStateToProps = (state: ApplicationState) => ({
    currentTab: state.brewdogBeers.currentTab
});

const mapDispatchToProps = (dispatch: any) => ({
    setTab: bindActionCreators(setCurrentTab, dispatch)
})

export default connect(mapAppStateToProps, mapDispatchToProps)(Header);