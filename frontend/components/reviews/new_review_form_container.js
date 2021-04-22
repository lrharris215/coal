import { connect } from 'react-redux';
import NewReviewForm from './new_review_form';
import { requestOneGame } from '../../actions/games_actions';
import { createNewGameReview } from '../../actions/reviews_actions';

const MSTP = (state) => {
    return {
        games: state.entities.games,
        currentUserId: state.session.id,
    };
};

const MDTP = (dispatch) => {
    return {
        requestOneGame: (gameId) => dispatch(requestOneGame(gameId)),
        createNewGameReview: (gameId, newReview) => dispatch(createNewGameReview(gameId, newReview)),
    };
};

export default connect(MSTP, MDTP)(NewReviewForm);
