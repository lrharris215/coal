import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVEIW } from '../actions/reviews_actions';

export default (oldState = {}, action) => {
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return Object.assign({}, action.reviews);
        case RECEIVE_REVIEW:
            return Object.assign({}, oldState, { [action.review.id]: action.review });
        case REMOVE_REVEIW:
            let newState = Object.assign({}, oldState);
            delete newState[action.reviewId];
            return newState;
        default:
            return oldState;
    }
};
