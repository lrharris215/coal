import React from 'react';
import { Link, Route } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import GamesIndexContainer from '../games/index/games_index_container';
import FeaturedCarouselContainer from '../games/featured/featured_carousel_container';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="homepage">
                <Route exact path="/" component={Sidebar} />
                <div className="main-content">
                    <Route exact path="/" component={FeaturedCarouselContainer} />
                    <Route exact path="/" component={GamesIndexContainer} />
                </div>
            </div>
        );
    }
}

export default HomePage;
