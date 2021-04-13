import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { requestAllGameReviews } from '../../actions/reviews_actions';
import ReviewsIndex from './reviews_index';

const MSTP = (state, ownProps) => {
    const gameId = ownProps.match.params.id;

    return {
        gameId,
        reviews: Object.values(state.entities.reviews),
        users: state.entities.users,
    };
};

const MDTP = (dispatch) => {
    return {
        requestAllGameReviews: (gameId) => dispatch(requestAllGameReviews(gameId)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
    };
};

export default connect(MSTP, MDTP)(ReviewsIndex);
