import React from 'react';
import ShoppingCartItem from './shopping_cart_item';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: JSON.parse(localStorage.getItem(this.props.currentUserId)),
        };
        this.calculateTotalPrice = this.calculateTotalPrice.bind(this);
    }
    calculateTotalPrice() {
        let total = 0;
        this.state.games.map((game) => {
            total += game.price;
        });
        return total;
    }

    render() {
        const mappedGames = this.state.games.map((game, idx) => {
            return <li key={`shop-cart-${idx}`}>{<ShoppingCartItem game={game} />}</li>;
        });
        const totalPrice = this.calculateTotalPrice();

        return (
            <div className="shopping-cart-container">
                <div className="shopping-cart-header">
                    <p>
                        <span>All Products </span> {'>'} Your Shopping Cart
                    </p>
                    <h1>Your Shopping Cart</h1>
                </div>
                <div className="transition-bar"></div>
                <div className="shopping-cart-body">
                    <ul>{mappedGames}</ul>
                </div>
                <div className="shopping-cart-bottom">
                    <div className="estimated-total">
                        <p>Estimated Total</p>
                        <p>{`$${this.calculateTotalPrice() / 100}`}</p>
                    </div>
                    <div className="purchase-row">
                        <div className="purchase-button">Purchase for myself</div>
                    </div>
                </div>
                <div className="under-cart">
                    <div className="remove-all-box">
                        <p>Remove all items</p>
                    </div>
                    <div className="continue-shopping-box">Continue Shopping</div>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;
