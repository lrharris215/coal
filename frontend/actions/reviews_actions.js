import * as ReviewsUtil from '../util/reviews_util'
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"

const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews,
    }
}

const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review,
    }
}

export const requestAllGameReviews = () => dispatch => {
    return (
        ReviewsUtil.getGameReviews().then((reviews) => dispatch(receiveReviews(reviews)))
    )
}

export const createNewGameReview = (gameId, newReview) => {
return (
    ReviewsUtil.postGameReview(gameId, newReview).then(review => dispatch(receiveReview(review)))
)
}