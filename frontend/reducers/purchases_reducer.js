import { RECEIVE_PURCHASE } from '../actions/purchases_actions';

export default (oldState = {}, action) => {
    switch (action.type) {
        case RECEIVE_PURCHASE: {
            return Object.assign({}, oldState, action.purchase)
        }
        default: {
            return oldState;
        }
    }
}