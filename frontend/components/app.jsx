import { Route, Switch, Link} from 'react-router-dom';
import React from 'react';
import {AuthRoute, ProtecedRoute} from '../util/route_util';
import LogInFormContainer from '../components/session_form/login-form-container';
import SignUpFormContainer from "../components/session_form/signup-form-container";
import MainHeader from "./main_header/main_header_container"
import Sidebar from "./sidebar/sidebar"

const App = () => {
    return (
    <div>
        <header>
            <MainHeader />
            <AuthRoute path="/login" component={LogInFormContainer}/>
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <Sidebar />
        </header>
    </div>
    )
}

export default App;