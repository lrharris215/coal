import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar">
                <div className="giftcards-pic">
                    <img src={window.giftCards} alt="gift cards" />
                    <div className="sidebar-logo">
                        <div className="logo">
                            <i className="fas fa-cogs"></i>
                        </div>
                        <h4>Coal</h4>
                    </div>
                </div>
                <ul className="giftCard-list">
                    <li>Gift Cards</li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            Now Available on Coal
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>Recommended</li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            <i className="fas fa-users"></i> By Friends
                        </Link>
                    </li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            <i className="fas fa-lightbulb"></i> By Curators
                        </Link>
                    </li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            <i className="fas fa-tags"></i> Tags
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>Discovery Queues</li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            <i className="fas fa-newspaper"></i> Recommendations
                        </Link>
                    </li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            <i className="fas fa-plus-square"></i> New Releases
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>Browse Categories</li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            <i className="fas fa-chart-line"></i> Top Sellers
                        </Link>
                    </li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            <i className="fas fa-plus-square"></i> New Releases
                        </Link>
                    </li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            <i className="fas fa-angle-up"></i> Upcoming
                        </Link>
                    </li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            <i className="fas fa-percent"></i> Specials
                        </Link>
                    </li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            <i className="fas fa-cloud"></i> Virtual Reality
                        </Link>
                    </li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            <i className="fas fa-gamepad"></i> Controller Friendly
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>Browse By Genre</li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            Free to Play
                        </Link>
                    </li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            Early Access
                        </Link>
                    </li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            Action Adventure
                        </Link>
                    </li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            Casual
                        </Link>
                    </li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            Indie
                        </Link>
                    </li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            Massively Multiplayer
                        </Link>
                    </li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            Racing
                        </Link>
                    </li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            RPG
                        </Link>
                    </li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            Simulation
                        </Link>
                    </li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            Sports
                        </Link>
                    </li>
                    <li>
                        <Link to="/" data-tip data-for="fake-link">
                            Strategy
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;
