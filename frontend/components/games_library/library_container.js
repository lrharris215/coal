import Library from './library';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';

const MSTP =  (state, ownProps) => {
    
    const userId = ownProps.match.params.id
    return {
        users: state.entities.users,
        userId,

    }
}

const MDTP = dispatch => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
       requestAllGames: () => dispatch(requestAllGames())
    }
}

export default connect(MSTP, MDTP)(Library);
