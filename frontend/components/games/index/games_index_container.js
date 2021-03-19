import { connect } from 'react-redux';
import { requestAllGames } from '../../../actions/games_actions';
import GamesIndex from './games_index';

const MSTP = state => {
    return {
        games: state.entities.games,
    }
}

const MDTP = dispatch => {
    return {
        requestAllGames: () => dispatch(requestAllGames())
    }
}

export default connect(MSTP, MDTP)(GamesIndex)