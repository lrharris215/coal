import { Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import ReactToolTip from 'react-tooltip';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogInFormContainer from '../components/session_form/login-form-container';
import SignUpFormContainer from '../components/session_form/signup-form-container';
import MainHeader from './main_header/main_header_container';
import GameDetailContainer from './games/show/game_detail_container';
import ShoppingCartContainer from './shopping_cart/shopping_cart_container';
import HomePage from './pages/homepage';
import LibraryContainer from './games_library/library_container';
import ReviewsIndexContainer from './reviews/reviews_index_container';

const App = () => {
    return (
        <div>
            <header>
                <MainHeader />
                <ReactToolTip place="top" id="fake-link">
                    Decorative link
                </ReactToolTip>
            </header>
            <div className="main-body-section">
                <AuthRoute path="/login" component={LogInFormContainer} />
                <AuthRoute path="/signup" component={SignUpFormContainer} />
                <ProtectedRoute path="/cart" component={ShoppingCartContainer} />
                <Route exact path="/" component={HomePage} />
                <Route path={`/api/games/:id`} component={GameDetailContainer} />
                <Route path={`/api/games/:id`} component={ReviewsIndexContainer} />
                <Route path={`/api/users/:id`} component={LibraryContainer} />
            </div>
        </div>
    );
};

export default App;
