import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { deleteGameReview, requestAllGameReviews, updateGameReview } from '../../actions/reviews_actions';
import ReviewsIndex from './reviews_index';

const MSTP = (state, ownProps) => {
    const gameId = ownProps.match.params.id;

    return {
        gameId,
        reviews: Object.values(state.entities.reviews),
        users: state.entities.users,
        currentUserId: state.session.id,
    };
};

const MDTP = (dispatch) => {
    return {
        requestAllGameReviews: (gameId) => dispatch(requestAllGameReviews(gameId)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        deleteGameReview: (reviewId) => dispatch(deleteGameReview(reviewId)),
        updateGameReview: (review) => dispatch(updateGameReview(review)),
    };
};

export default connect(MSTP, MDTP)(ReviewsIndex);
