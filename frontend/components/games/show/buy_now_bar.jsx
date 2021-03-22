import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div className="buy-now-bar">
            <div className="main-box">
                <h2 className="title"> Buy {props.game.title}</h2>
                <div className="icons">
                    <i className="fab fa-windows"></i>
                    <i className="fab fa-apple"></i>
                </div>
            </div>
            <div className="black-box">
                <div className="price-box">
                    <p>{props.game.price / 100}</p>
                </div>
                <Link to="/cart">
                    <div
                        className="cart-box"
                        onClick={() => localStorage.setItem(currentUser.id, JSON.stringify(props.game))}>
                        <p>Add to Cart</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};
