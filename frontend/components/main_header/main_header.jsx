import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom'

export default (props) => {
    return (
        <div className="main-header">
            <Link to="/">
            <div className="logo-container">
            
            <div className="logo">
                <i className="fas fa-cogs"></i>
            </div>
            <h1>Coal</h1>
            
            </div>
            </Link>

            <nav className="main-header-nav">
                <ul>
                    <li>Store</li>
                    <li>Community</li>
                    {props.loggedIn ? <li>{props.username}</li> : <li>About</li>}

                    <li>Chat</li>
                    <li>Support</li>
                </ul>
            </nav>

            <div className="right-main-header">
                {props.loggedIn ? <button onClick={props.logoutUser}>Log Out</button>  : 
                <div>
                    <Link to="/login">Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div> }
            </div>
        </div>
    )
}
