import * as React from 'react';
import Swiper from 'swiper'
import { getAllBeersRequest, getFoodBeersRequest, setCurrentTab } from '../../../data/beers/actions';
import './brewdog.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

interface BrewdogProps {
    getAllBeers: () => void;
    getFoodBeers: (food: string) => void;
}

function Brewdog({ getAllBeers, getFoodBeers }: BrewdogProps) {
    const [ currentSwipeable, setCurrentSwipeable ] = React.useState(0);
    let brewSwiper: Swiper;
    

    //Some default settings for Swiper, not very friendly tho :)
    React.useEffect(() => {
        brewSwiper = new Swiper('.swiper-container', {
            speed: 0,
            spaceBetween: 0,
           
            grabCursor: true,
            slidesPerView: 'auto',
            
            pagination: {
                el: '.swiper-pagination',
            }
            
        });
        brewSwiper.on('slideChange', () => {
           
            setCurrentSwipeable(brewSwiper.activeIndex)
        });

        getAllBeers();
    }, [])
    React.useEffect(() => {
        if(currentSwipeable === 0) {
            getAllBeers();
        } else if (currentSwipeable === 1) {
            getFoodBeers('pizza');
        } else {
            getFoodBeers('steak');
        }
    }, [currentSwipeable])

    return(
        <div className="brewdog">
             <div className="home--filter-swipe-tabs">
                <ul>
                    <li className={`${currentSwipeable === 0 ? 'active': ''}`}>All</li>
                    <li className={`${currentSwipeable === 1 ? 'active': ''}`}>Pizza</li>
                    <li className={`${currentSwipeable === 2 ? 'active': ''}`}>Steak</li>
                </ul>
            </div>
            <div className="home--data-list-view">
              
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                   
                </div>
            </div>
                
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch: any) => ({
    getAllBeers: bindActionCreators(getAllBeersRequest, dispatch),
    getFoodBeers: bindActionCreators(getFoodBeersRequest, dispatch)
});

export default connect(null, mapDispatchToProps)(Brewdog);