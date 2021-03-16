import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/session_actions';
import SessionForm from './session_form';

const MSTP = ({errors}) => {
    return {
        formType: "Log in",
        errors: errors.session,
        navLink: <Link to="/signup">Sign Up</Link>

    }
}

const MDTP = dispatch => {
    return {
        action: (user) => dispatch(loginUser(user))
    }
}

export default connect(MSTP, MDTP)(SessionForm)