import * as React from 'react';
import './home.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getAllBeersRequest, getFoodBeersRequest } from '../../data/beers/actions';
import ReactSwipe from 'react-swipe';
import { ApplicationState } from '../../data/root-reducer';

interface HomeProps {
    getAllBeersRequest: () => void;
    getFoodBeersRequest: (food: string) => void;
    currentTab: string;
}

function Home({ getAllBeersRequest, getFoodBeersRequest }: HomeProps) {
    
    const [ currentSwipeable, setCurrentSwipeable ] = React.useState(0);
    const swipeRef = React.useRef<ReactSwipe>(null);
    const swipeCallback = (index: number, elem: HTMLElement) => {
        console.log(index, elem);
    }

    return (
        <div className="home">
            <div className="home--filter-swipe-tabs">
                <ul>
                    <li>All</li>
                    <li>Pizza</li>
                    <li>Steak</li>
                </ul>
            </div>
            <div className="home--data-list-view">
                <ReactSwipe
                    className="home--data-list-view-swipe-pages"
                    ref={swipeRef}
                    swipeOptions={{ callback: swipeCallback }}    
                >
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    
                </ReactSwipe>
                <button onClick={() => { swipeRef.current?.prev(); }}>Previous</button>
                <button onClick={() => { swipeRef.current?.next(); }}>Next</button>
                
            </div>
        </div>
    )
}

const mapAppStateToProps = (state: ApplicationState) => ({
    currentTab: state.brewdogBeers.currentTab
});

const mapDispatchToProps = () => ({
    getAllBeersRequest,
    getFoodBeersRequest
});

export default withRouter(connect(mapAppStateToProps, mapDispatchToProps)(Home));