import React from 'react';
import { Link, Route } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import GamesIndexContainer from '../games/index/games_index_container';
import FeaturedCarouselContainer from '../games/featured/featured_carousel_container';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.hasCart = Boolean(localStorage.getItem(window.currentUser.id));
        this.numItemsInCart = this.numItemsInCart.bind(this);
    }
    numItemsInCart() {
        if (this.hasCart) {
            let items = Object.values(JSON.parse(localStorage.getItem(window.currentUser.id)));
            return items.length;
        }
    }
    render() {
        return (
            <div className="homepage">
                <Route exact path="/" component={Sidebar} />
                <div className="main-content">
                    <div className="fake-nav-bar">
                        {this.hasCart ? (
                            <Link to="./cart">
                                <div className="cart-button">Cart({this.numItemsInCart()})</div>
                            </Link>
                        ) : (
                            <div className="empty"> </div>
                        )}
                    </div>

                    <Route exact path="/" component={FeaturedCarouselContainer} />
                    <Route exact path="/" component={GamesIndexContainer} />
                </div>
            </div>
        );
    }
}

export default HomePage;
