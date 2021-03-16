import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import MainHeader from './main_header';

const MSTP = state => {
    const id = state.session.id
    return {
        loggedIn: Boolean(state.session.id),
        username: state.entities.users[id] ? state.entities.users[id].username : null
    }

}

const MDTP = dispatch => {
    return {
    logoutUser: () => dispatch(logoutUser())
    }
}
export default connect(MSTP, MDTP)(MainHeader)
