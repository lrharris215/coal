import React from 'react';
import { Link } from 'react-router-dom';

class GamesIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { game, titleCard, isActive } = this.props;
        return (
            <div className={isActive ? 'active' : 'inactive'}>
                <Link to={`/api/games/${game.id}`}>
                    <div className="games-index-item">
                        <div className="games-index-item-left">
                            <div className="titleCard-box">
                                <img src={titleCard[0].img_url} />
                            </div>
                            <div className="games-index-item-words">
                                <h4 id="index-title">{game.title}</h4>
                                <i className="fab fa-windows"></i>
                                <p>Categories</p>
                            </div>
                        </div>
                        <div className="games-index-item-price">
                            <p>${game.price / 100}</p>
                        </div>
                        <div className={`${isActive ? 'index-bridge-active' : 'index-bridge-hidden'}`}></div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default GamesIndexItem;
