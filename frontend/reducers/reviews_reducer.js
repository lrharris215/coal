import { RECEIVE_REVIEWS, RECEIVE_REVIEW} from '../actions/reviews_actions';

export default (oldState = {}, action) => {
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return Object.assign({}, oldState, action.reviews);
        case RECEIVE_REVIEW:
            return Object.assign({}, oldState, {[action.review.id]: action.review});
        default: 
            return oldState;
    }
}