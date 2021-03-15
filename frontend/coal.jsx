//entry file
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
import { createNewUser, loginUser, logoutUser } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
    let preloadedState = {};
    
    if(window.currentUser) {
        preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: { id: window.currentUser.id}
        }
    }
    const root = document.getElementById("root");
    const store = configureStore(preloadedState);

    window.store = store;
    window.createNewUser = createNewUser;
    window.loginUser = loginUser;
    window.logoutUser = logoutUser;

    ReactDOM.render(<Root store={store} />, root)
})

