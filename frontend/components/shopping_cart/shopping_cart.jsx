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
        this.handlePurchaseButton = this.handlePurchaseButton.bind(this);
        this.calculateTotalPrice = this.calculateTotalPrice.bind(this);
    }
    componentDidMount() {
        console.log('Shopping cart is mounted?');
        console.log(`${this.state.games}`);
        if (!this.state.games) {
            return <Redirect to="/" />;
        }
    }
    calculateTotalPrice() {
        let total = 0;
        Object.values(this.state.games).map((game) => {
            total += game.price;
        });
        console.log('total price calculated');
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
    handlePurchaseButton() {
        let games = Object.values(this.state.games);
        debugger;
        games.map((game) => {
            this.props.createNewPurchase({ buyerId: this.props.currentUserId, gameId: game.id });
        });
        debugger;
        localStorage.clear();
        return <Redirect to="/" />;
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
        if (Object.values(this.state.games).length < 1) {
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
                        <div className="purchase-button" onClick={() => this.handlePurchaseButton()}>
                            Purchase for myself
                        </div>
                    </div>
                </div>
                <div className="under-cart">
                    <div className="remove-all-box" onClick={() => this.handleRemoveAllItems()}>
                        <Link to="/">
                            <p>Remove all items</p>
                        </Link>
                    </div>
                    <Link to="/">
                        <div className="continue-shopping-box">Continue Shopping</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;
