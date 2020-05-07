import * as React from 'react';
import './home.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _ from 'lodash';
import { ApplicationState } from '../../data/root-reducer';
import { TabTypes, Beer } from '../../data/beers/types';
import Brewdog from '../../components/TabViews/Brewdog';
import Whatever from '../../components/TabViews/Whatever';
import BrewdogBeerModal from '../../components/TabViews/Brewdog/BrewdogBeers/BrewdogBeerModal';

interface HomeProps {
    
    currentTab: string;
}

function Home({ currentTab }: HomeProps) {
    const mainRef = React.useRef<HTMLDivElement>(null); 
    const initModalState = {beerInfo: false, others: false };

    const [ modalState, setModalState ] = React.useState({...initModalState});
    const [ selectedBeerState, setSelectedBeerState ] = React.useState({} as Beer);

    const closeModal = () => {
        document.body.classList.remove('modal-is-visible');
        setModalState(initModalState);
      };

    const activateModal = (name: string) => {
        setModalState({...initModalState, [name]: true});
        document.body.classList.add('modal-is-visible');
    }
    const selectBeer = (beer: Beer) => {
        console.log('selected beer', beer);
        setSelectedBeerState(prev => beer);

    }

    React.useEffect(() => {
        if(!_.isEmpty(selectedBeerState) && mainRef.current){
            activateModal('beerInfo');
        }
    }, [selectedBeerState]);

    return (
        <div className="home" ref={mainRef}>
            { currentTab === TabTypes.BREWDOG_TAB &&
                <Brewdog selectBeer={selectBeer} />
            } 
            { currentTab === TabTypes.WHATEVER_TAB &&
                <Whatever />
            } 
            { currentTab === TabTypes.SETTINGS_TAB &&
                <div>Settings and stuff</div>

            }
            { currentTab === TabTypes.SEARCH_TAB &&
                <div>Search and stuff </div>
            }
            { modalState.beerInfo &&
                <BrewdogBeerModal beer={selectedBeerState} close={closeModal} isActive={modalState.beerInfo}/>
            }
           
        </div>
    )
}

const mapAppStateToProps = (state: ApplicationState) => ({
    currentTab: state.brewdogBeers.currentTab
});

export default withRouter(connect(mapAppStateToProps)(Home));