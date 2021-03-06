import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

const _nullSession = {
    id: null,
    username: null,
}

export default (oldState = _nullSession, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            window.currentUser = action.user;
            return Object.assign({}, { id: action.user.id, username: action.user.username})
        case LOGOUT_CURRENT_USER:
            window.currentUser = _nullSession;
            return _nullSession;
        default:
            return oldState
    }
}