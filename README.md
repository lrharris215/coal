# README

# Coal

## About

[Coal](https://coal-powered.herokuapp.com/#/) is a clone of the website Steam! Users can log in and purchase games from their shopping cart for their Coal Library. Featured games are displayed front and center on the Feature Carousel on the home page, while the full list of available games displayed below. Each game also has a show page with more information, as well as the ability to add the game to your cart. Finally, after purchasing the game from your shopping cart, you can view your collection of games on your Coal Library page.

## Technologies

Coal was built using a combination of Ruby on Rails, Javascript, React, Redux, HTML, and SCSS. Postgres was used as the database.

## Main Features

### UserAuth

Users can log in, log out, or sign up to Coal. Some features, like the shopping cart, are only available to users who are logged in. There is a guest account available for demo purposes.

### Carousels

The featured and show page carousels are the components that took up the most lines of code and the most time spent styling. The carousel component keeps track of the active picture in its state. Every five seconds, the 'activePicIdx' updates to the next one on the list, causing the next game or image to appear on the screen. I also used debouncing to prevent the image from transitioning away while the user is hovering over it, or while the webpage isn't active.

```javascript
    debounceInterval() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        this.intervalId = setInterval(() => {
            this.setState({
                activeGameIdx:
                    this.state.activeGameIdx === this.props.games.length - 1 ? 0 : this.state.activeGameIdx + 1,
            });
        }, 5 * 1000);
    }
```

### Shopping Cart

The shopping cart allows users to 'save' the games they want to purchase before they are ready to purchase them. This way, the user only has to make one payment to aquire multiple games. The shopping cart uses local storage to keep track of the games the user intends to buy. This allows the cart to persist even if the user logs out before completing their purchase.

```javascript
class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: JSON.parse(localStorage.getItem(this.props.currentUserId)),
        };
    ...}

...}

```

## Credits

-   All icons are from Fontawesome.com
-   The gift card pic: https://toppng.com/show_download/84324/steam-gift-card-usd-50-steam-digital/large
-   All other pictures and screenshots are from Steam's store pages.
