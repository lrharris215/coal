import * as ReviewsUtil from '../util/reviews_util';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVEIW = 'REMOVE_REVIEW';

const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews,
    };
};

const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review,
    };
};

const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVEIW,
        reviewId,
    };
};

export const requestAllGameReviews = (gameId) => (dispatch) => {
    return ReviewsUtil.getGameReviews(gameId).then((reviews) => dispatch(receiveReviews(reviews)));
};

export const createNewGameReview = (newReview) => (dispatch) => {
    return ReviewsUtil.postGameReview(newReview).then((review) => dispatch(receiveReview(review)));
};

export const updateGameReview = (review) => (dispatch) => {
    return ReviewsUtil.updateGameReview(review).then((review) => dispatch(receiveReview(review)));
};

export const deleteGameReview = (reviewId) => (dispatch) => {
    return ReviewsUtil.deleteGameReview(reviewId).then(() => dispatch(removeReview(reviewId)));
};
