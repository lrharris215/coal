import React from 'react';
import { render } from 'react-dom';

export default (props) => {
    return (
        <div className="main-header">
            <div className="logo"></div>

            <nav>
                <ul>
                    <li>Store</li>
                    <li>Community</li>
                    <li>{this.props.username}</li>
                    <li>Chat</li>
                    <li>Support</li>
                </ul>
            </nav>
        </div>
    )
}