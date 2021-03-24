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
       
    }
}

export default connect(MSTP, MDTP)(Library);
