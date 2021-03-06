import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import gamesReducer from './games_reducer';
import purchasesReducer from './purchases_reducer'
import reviewsReducer from './reviews_reducer';

export default combineReducers({
    users: usersReducer,
    games: gamesReducer,
    purchases: purchasesReducer,
    reviews: reviewsReducer,
})