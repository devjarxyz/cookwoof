import * as React from 'react';
import './home.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getAllBeersRequest, getFoodBeersRequest } from '../../data/beers/actions';

import { ApplicationState } from '../../data/root-reducer';
import { TabTypes } from '../../data/beers/types';
import Brewdog from '../../components/TabViews/Brewdog';
import Whatever from '../../components/TabViews/Whatever';

interface HomeProps {
    
    currentTab: string;
}

function Home({ currentTab }: HomeProps) {
     
   

    return (
        <div className="home">
            { currentTab === TabTypes.BREWDOG_TAB &&
                <Brewdog />
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
           
        </div>
    )
}

const mapAppStateToProps = (state: ApplicationState) => ({
    currentTab: state.brewdogBeers.currentTab
});

export default withRouter(connect(mapAppStateToProps)(Home));