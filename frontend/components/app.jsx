import { Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import { AuthRoute, ProtecedRoute } from '../util/route_util';
import LogInFormContainer from '../components/session_form/login-form-container';
import SignUpFormContainer from '../components/session_form/signup-form-container';
import MainHeader from './main_header/main_header_container';
import Sidebar from './sidebar/sidebar';
import GamesIndexContainer from './games/index/games_index_container';
import FeaturedCarouselContainer from './games/featured/featured_carousel_container';

const App = () => {
    return (
        <div>
            <header>
                <MainHeader />
            </header>
            <div className="main-body-section">
                <div className="main-body-top">
                    <Switch>
                        <AuthRoute path="/login" component={LogInFormContainer} />
                        <AuthRoute path="/signup" component={SignUpFormContainer} />
                        <Route path="/" component={Sidebar} />
                    </Switch>

                    {/* <Route exact path="/" component={FeaturedCarouselContainer} /> */}
                </div>
                <Route exact path="/" component={GamesIndexContainer} />
            </div>
        </div>
    );
};

export default App;
