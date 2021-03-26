import { connect } from 'react-redux'
import { requestAllGameReviews } from '../../actions/reviews_actions'
import ReviewsIndex from "./reviews_index"

const MSTP = (state, ownProps) => {
    const gameId = ownProps.match.params.id
    debugger
    return {
        gameId,
        reviews: Object.values(state.entities.reviews)
    }
}

const MDTP = dispatch => {
    return {
        requestAllGameReviews: (gameId) => dispatch(requestAllGameReviews(gameId))
    }
}

export default connect(MSTP, MDTP)(ReviewsIndex);