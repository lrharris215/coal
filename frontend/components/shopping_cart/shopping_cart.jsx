import React from 'react';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="shopping-cart-container">
                <div className="shopping-cart-header">
                    <p>
                        <span>All Products </span> {'>'} Your Shopping Cart
                    </p>
                    <h1>Your Shopping Cart</h1>
                </div>
                <div className="shopping-cart-body">
                    <ul>{/* <ShoppingCartListItem /> */}</ul>
                </div>
                <div className="shopping-cart-bottom">
                    <div className="estimated-total">
                        <p>Estimated Total:</p>
                        <p>Price</p>
                    </div>
                </div>
                <div className="purchase-button">Purchase for Myself</div>
            </div>
        );
    }
}

export default ShoppingCart;
