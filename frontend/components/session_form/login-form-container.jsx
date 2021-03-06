import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const MSTP = ({errors}) => {
    return {
        formType: "Sign in",
        errors: errors.session,
        navLink: <Link to="/signup">Sign Up</Link>,
        klassName: "login-form",
       
        
    }
}

const MDTP = dispatch => {
    return {
        action: (user) => dispatch(loginUser(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(MSTP, MDTP)(SessionForm)