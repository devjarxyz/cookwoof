import * as React from 'react';
import Swiper from 'swiper'
import { getAllBeersRequest, getFoodBeersRequest, setCurrentTab } from '../../../data/beers/actions';
import './brewdog.css';
import { connect } from 'react-redux';

function Brewdog() {
    const [ currentSwipeable, setCurrentSwipeable ] = React.useState(0);
    let brewSwiper: Swiper;
    const swipeCallback = (index: number, elem: HTMLElement) => {
        setCurrentSwipeable(index);
        console.log(index);
    }
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
            console.log(brewSwiper.activeIndex);
            setCurrentSwipeable(brewSwiper.activeIndex)
        })
    }, [])

    
   
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

const mapDispatchToProps = () => ({
    getAllBeersRequest,
    getFoodBeersRequest
});

export default connect(null, mapDispatchToProps)(Brewdog);