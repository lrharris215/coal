import { RECEIVE_REVIEWS, RECEIVE_REVIEW} from '../actions/reviews_actions';

export default (oldState = {}, action) => {
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return Object.assign({}, action.reviews);
        case RECEIVE_REVIEW:
            return Object.assign({}, oldState, action.review);
        default: 
            return oldState;
    }
}