import { RECEIVE_GAME, RECEIVE_GAMES } from '../actions/games_actions';

export default (oldState = {}, action) => {
    switch(action.type) {
        case RECEIVE_GAMES:
            return Object.assign({}, action.games);
        case RECEIVE_GAME: 
            return Object.assign({}, oldState, {[action.game.id]: action.game});
        default:
            return oldState;
    }
    
}