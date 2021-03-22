import React from 'react';

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
        const mappedGames = this.state.games.map((game) => {
            return <li>{<ShoppingCartItem game={game} />}</li>;
        });
        const totalPrice = this.calculateTotalPrice();
        debugger;
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
