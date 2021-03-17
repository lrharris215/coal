import * as SessionUtils from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user,
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
}

const receiveErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors,
    }
}

export const createNewUser = user => dispatch => {
    return(
        SessionUtils.postUser(user).then(user => dispatch(receiveCurrentUser(user)), 
        error => dispatch(receiveErrors(error.responseJSON)))
    )
}

export const loginUser = user => dispatch => {
    return (
        SessionUtils.postSession(user).then((user)=> dispatch(receiveCurrentUser(user)), 
        error => dispatch(receiveErrors(error.responseJSON)))
    )
}

export const logoutUser = () => dispatch => {
    return(
        SessionUtils.deleteSession().then(() => dispatch(logoutCurrentUser()))
    )
}