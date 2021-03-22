import { connect } from 'react-redux'
import { requestOneGame} from '../../../actions/games_actions'
import GameDetail from './game_detail'

const MSTP = (state, ownProps) => {
    
    const id = ownProps.match.params.id
    return {
        gameId: id,
        games: state.entities.games,
        
    }
}

const MDTP = dispatch => {
    return {
        requestOneGame: (gameId) => dispatch(requestOneGame(gameId))
    }
}

export default connect(MSTP, MDTP)(GameDetail)