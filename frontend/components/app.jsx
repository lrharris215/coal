import { Route, Switch, Link} from 'react-router-dom';
import React from 'react';
import {AuthRoute, ProtecedRoute} from '../util/route_util';
import LogInFormContainer from '../components/session_form/login-form-container';
import SignUpFormContainer from "../components/session_form/signup-form-container";
import MainHeader from "./main_header/main_header_container"
import Sidebar from "./sidebar/sidebar"
import GamesIndexContainer from './games/index/games_index_container'

const App = () => {
    return (
    <div>
        <header>
            <MainHeader />
        </header>
        <Switch>
        <AuthRoute path="/login" component={LogInFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <Route path="/" component={Sidebar} />
        </Switch>
       <Route exact path="/" component={GamesIndexContainer} />
    </div>
    )
}

export default App;