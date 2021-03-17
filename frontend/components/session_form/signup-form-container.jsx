import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createNewUser } from '../../actions/session_actions';
import SessionForm from './session_form';

const MSTP = ({ errors }) => {
    return {
        formType: "Sign up",
        errors: errors.session,
        navLink: <Link to="/login">Sign In</Link>,
        klassName: "signup-form"

    }
}

const MDTP = dispatch => {
    return {
        action: (user) => dispatch(createNewUser(user))
    }
}

export default connect(MSTP, MDTP)(SessionForm)