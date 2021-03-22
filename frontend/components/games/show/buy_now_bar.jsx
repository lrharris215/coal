import React from 'react';

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
                <div className="cart-box">
                    <p>Add to Cart</p>
                </div>
            </div>
        </div>
    );
};
