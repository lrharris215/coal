import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class ShoppingCartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePicIdx: 0,
        };
        this.intervalId = null;
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                activePicIdx:
                    this.state.activePicIdx === Object.values(this.props.game.gameImages).length - 2
                        ? 0
                        : this.state.activePicIdx + 1,
            });
        }, 2 * 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        const { game } = this.props;
        const titleCard = Object.values(game.gameImages).filter((image) => image.img_type === 'title-card');
        const screenshots = Object.values(game.gameImages).filter((image) => image.img_type === 'screenshot');
        const reviewNum = game && game.id * 1047 + 453;

        return (
            <div className="shopping-cart-item">
                <div className="left-side">
                    <Link to={`/api/games/${game.id}`}>
                        <div className="title-card">
                            <img className="title-card" src={titleCard[0].img_url} alt={`${game.title}-title-card`} />
                        </div>
                    </Link>
                    <Link to={`/api/games/${game.id}`}>
                        <div className="title">{game.title}</div>
                    </Link>
                </div>
                <div className="right-side">
                    <div className="icons">
                        <i className="fab fa-windows"></i>
                        <i className="fab fa-apple"></i>
                    </div>
                    <div className="price-remove">
                        <p className="price">{`$${game.price / 100}`}</p>
                        <p className="remove" onClick={() => this.props.handleRemoveOneItem(game.id)}>
                            Remove
                        </p>
                    </div>
                </div>

                <div className="sc-item-detail">
                    <h4>{game.title}</h4>
                    <p>
                        {new Date(game.release_date).toLocaleDateString('en-us', {
                            timeZone: 'utc',
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                        })}
                    </p>
                    <img className="screenshot" src={screenshots[this.state.activePicIdx].img_url} />
                    <div className="review-box">
                        <p>Overall user reviews:</p>
                        <p>
                            <span>Overwhelmingly Positive</span>({reviewNum})
                        </p>
                    </div>
                    <div className="tag-box">
                        <p>User tags</p>
                        <div className="tags">
                            <div className="tag">Tag1</div>
                            <div className="tag">Tag2</div>
                            <div className="tag">Tag3</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShoppingCartItem;
