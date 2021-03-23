import React from 'react';
import ShoppingCartItem from './shopping_cart_item';
import { Link, Redirect } from 'react-router-dom';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: JSON.parse(localStorage.getItem(this.props.currentUserId)),
        };
        this.handleRemoveAllItems = this.handleRemoveAllItems.bind(this);
        this.handleRemoveOneItem = this.handleRemoveOneItem.bind(this);
        this.calculateTotalPrice = this.calculateTotalPrice.bind(this);
    }
    componentDidMount() {
        if (!this.state.games) {
            return <Redirect to="/" />;
        }
    }
    calculateTotalPrice() {
        let total = 0;
        Object.values(this.state.games).map((game) => {
            total += game.price;
        });
        return total;
    }

    handleRemoveAllItems() {
        localStorage.clear();
    }

    handleRemoveOneItem(itemId) {
        delete this.state.games[itemId];
        localStorage.setItem(this.props.currentUserId, JSON.stringify(this.state.games));
        this.setState({
            games: this.state.games,
        });
    }

    render() {
        const mappedGames =
            this.state.games &&
            Object.values(this.state.games).map((game, idx) => {
                return (
                    <li key={`shop-cart-${idx}`}>
                        {<ShoppingCartItem handleRemoveOneItem={this.handleRemoveOneItem} game={game} />}
                    </li>
                );
            });
        if (!this.state.games) {
            return <Redirect to="/" />;
        }

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
                    <div className="remove-all-box" onClick={() => this.handleRemoveAllItems()}>
                        <Link to="/">
                            <p>Remove all items</p>
                        </Link>
                    </div>
                    <div className="continue-shopping-box">Continue Shopping</div>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;
