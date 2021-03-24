//entry file
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { createNewPurchase } from './actions/purchases_actions';
import { fetchUser } from './actions/user_actions';
import { getUser } from './util/users_util';

document.addEventListener('DOMContentLoaded', () => {
    let preloadedState = {};

    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser,
                },
            },
            session: { id: window.currentUser.id },
        };
    }
    const root = document.getElementById('root');
    const store = configureStore(preloadedState);

    window.store = store;
    window.createNewPurchase = createNewPurchase;
    window.fetchUser = fetchUser;
    window.getUser = getUser;

    ReactDOM.render(<Root store={store} />, root);
});
