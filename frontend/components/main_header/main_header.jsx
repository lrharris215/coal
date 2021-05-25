import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import HeaderDropDownContainer from '../dropdowns/header_dropdown';

class MainHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const installButtonColor = this.props.loggedIn ? 'grey' : 'orange';
        return (
            <div className="header-container">
                <div className="main-header">
                    <Link className="logo-container" to="/">
                        <div className="logo">
                            <i className="fas fa-cogs"></i>
                        </div>
                        <h1>Coal</h1>
                    </Link>

                    <nav className="main-header-nav">
                        <ul>
                            <li>
                                <HeaderDropDownContainer
                                    buttonName={'store-button'}
                                    hasHover={true}
                                    titleItem={<p className="store-dropdown">Store</p>}
                                    listItems={[
                                        <Link to="/">Home</Link>,
                                        <Link to="/" data-place="left" data-tip data-for="fake-link">
                                            Discovery Queue
                                        </Link>,
                                        <Link to="/" data-place="left" data-tip data-for="fake-link">
                                            Wishlist
                                        </Link>,
                                        <Link to="/" data-place="left" data-tip data-for="fake-link">
                                            News
                                        </Link>,
                                        <Link to="/" data-place="left" data-tip data-for="fake-link">
                                            Stats
                                        </Link>,
                                        <Link to="/" data-place="left" data-tip data-for="fake-link">
                                            About
                                        </Link>,
                                    ]}
                                />
                            </li>
                            <li>
                                <HeaderDropDownContainer
                                    buttonName={'community-button'}
                                    hasHover={true}
                                    titleItem={<p className="community-dropdown">Community</p>}
                                    listItems={[
                                        <Link to="/">Home</Link>,
                                        <Link data-place="left" data-tip data-for="fake-link" to="">
                                            Discussions
                                        </Link>,
                                        <Link data-place="left" data-tip data-for="fake-link" to="">
                                            Workshop
                                        </Link>,
                                        <Link data-place="left" data-tip data-for="fake-link" to="">
                                            Market
                                        </Link>,
                                        <Link data-place="left" data-tip data-for="fake-link" to="">
                                            Broadcasts
                                        </Link>,
                                    ]}
                                />{' '}
                            </li>
                            {this.props.loggedIn ? (
                                <li>
                                    <HeaderDropDownContainer
                                        buttonName={'main-username-button'}
                                        hasHover={true}
                                        titleItem={<p>{this.props.username}</p>}
                                        listItems={[
                                            <Link data-place="left" data-tip data-for="fake-link" to="/">
                                                Activity
                                            </Link>,
                                            <Link to={`/api/users/${this.props.id}`}>Profile</Link>,
                                            <Link data-place="left" data-tip data-for="fake-link" to="/">
                                                Friends
                                            </Link>,
                                            <Link data-place="left" data-tip data-for="fake-link" to="/">
                                                Groups
                                            </Link>,
                                            <Link data-place="left" data-tip data-for="fake-link" to="/">
                                                Content
                                            </Link>,
                                            <Link data-place="left" data-tip data-for="fake-link" to="/">
                                                Badges
                                            </Link>,
                                            <Link data-place="left" data-tip data-for="fake-link" to="/">
                                                Inventory
                                            </Link>,
                                        ]}
                                    />
                                </li>
                            ) : (
                                <li>
                                    <a href="" data-place="bottom" data-tip data-for="fake-link">
                                        Support
                                    </a>
                                </li>
                            )}

                            <li>
                                <HeaderDropDownContainer
                                    buttonName="about-button"
                                    hasHover={true}
                                    titleItem={<p className="about-dropdown">About</p>}
                                    listItems={[
                                        <a target="_blank" href="https://lrharris215.github.io./">
                                            <i className="fas fa-user-circle"></i> Portfolio Site
                                        </a>,
                                        <a target="_blank" href="https://github.com/lrharris215">
                                            <i className="fab fa-github"></i> Github
                                        </a>,
                                        <a target="_blank" href="https://www.linkedin.com/in/lane-harris-86830320b/">
                                            <i className="fab fa-linkedin"></i> LinkedIn
                                        </a>,
                                        <a target="_blank" href="https://angel.co/u/lane-harris">
                                            <i className="fab fa-angellist"></i> AngelList
                                        </a>,
                                    ]}
                                />
                            </li>
                        </ul>
                    </nav>

                    <div className="right-main-header">
                        <div
                            className={`install-button ${installButtonColor}`}
                            data-place="bottom"
                            data-tip
                            data-for="fake-link">
                            <i className="fas fa-download"></i>
                            Install Coal
                        </div>
                        {this.props.loggedIn ? (
                            <div className="loggedIn-right-header">
                                <div className="envelope" data-place="bottom" data-tip data-for="fake-link">
                                    <i className="fas fa-envelope"></i>
                                </div>

                                <HeaderDropDownContainer
                                    buttonName={'username-button'}
                                    titleItem={
                                        <p className="username-dropdown">
                                            {this.props.username}
                                            <i className="fas fa-caret-down"></i>
                                        </p>
                                    }
                                    listItems={[
                                        <Link to={`api/users/${this.props.id}`}>View profile</Link>,
                                        <a href="" data-place="left" data-tip data-for="fake-link">
                                            Account details
                                        </a>,
                                        <button className="logout-button" onClick={this.props.logoutUser}>
                                            Logout: <span className="yellow-text">{this.props.username}</span>
                                        </button>,
                                        <a href="" data-place="left" data-tip data-for="fake-link">
                                            Preferences
                                        </a>,
                                        <a href="" data-place="left" data-tip data-for="fake-link">
                                            Change language
                                        </a>,
                                    ]}
                                />
                                <div className="profile-pic">
                                    <img src={window.cubeURL} alt="Profile pic" />
                                </div>
                            </div>
                        ) : (
                            <div className="loggedOut-right-header">
                                <Link to="/login">login</Link>
                                <p>
                                    <span className="line">|</span>{' '}
                                    <span data-place="bottom" data-tip data-for="fake-link" className="pretend-link">
                                        language
                                    </span>
                                    <i className="fas fa-caret-down" />{' '}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default MainHeader;
