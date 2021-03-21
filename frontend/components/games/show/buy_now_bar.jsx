import React from 'react';

export default (props) => {
    return (
        <div className="buy-now-bar">
            <div>
                <h2 className="title">{props.game.title}</h2>
                <div className="icons">
                    <i className="fab fa-windows"></i>
                    <i class="fab fa-apple"></i>
                    <div className="logo">
                        <i className="fas fa-cogs"></i>
                    </div>
                </div>
            </div>
            <div className="black-box">
                <div>
                    <p>{props.game.price / 100}</p>
                </div>
                <div>
                    <p>Add to Cart</p>
                </div>
            </div>
        </div>
    );
};
