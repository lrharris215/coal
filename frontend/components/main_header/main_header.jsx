import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import HeaderDropDownContainer from "../dropdowns/header_dropdown"



class MainHeader extends React.Component {
        constructor(props){
            super(props);
        }
   
        render () {
            const installButtonColor = this.props.loggedIn ? "grey" : "orange";
            return (

            <div className="main-header">
                <Link className="logo-container" to="/">
                
                <div className="logo">
                    <i className="fas fa-cogs"></i>
                </div>
                <h1>Coal</h1>
                
                </Link>

                <nav className="main-header-nav">
                    <ul>
                        <li><HeaderDropDownContainer buttonName={"store-button"}hasHover={true} titleItem={<p className="store-dropdown">Store</p>} listItems={[<a href="">Home</a>, <a href="">Discovery Queue</a>, <a href="">Wishlist</a>, <a href="">News</a>, <a href="">Stats</a>, <a href="">About</a>]}/></li>
                            <li><HeaderDropDownContainer buttonName={"community-button"}hasHover={true} titleItem={<p className="community-dropdown">Community</p>} listItems={[<Link to="/">Home</Link>, <Link to="/">Discussions</Link>, <Link to="/">Workshop</Link>, <Link to="/">Market</Link>, <Link to="/">Broadcasts</Link>]}/> </li>
                        {this.props.loggedIn ? <li>
                                <HeaderDropDownContainer buttonName={"main-username-button"} hasHover={true} titleItem={<p>{this.props.username}</p>} listItems={[<Link to="/">Activity</Link>, <Link to="/">Profile</Link>, <Link to="/">Friends</Link>, <Link to="/">Groups</Link>, <Link to="/">Content</Link>, <Link to="/">Badges</Link>, <Link to="/">Inventory</Link>]}/>
                                </li> : <li><a href="">About</a></li>}
                                
                        {this.props.loggedIn ? <li><a href="">Chat</a></li> : null}
                        
                        <li><a href="">Support</a></li>
                    </ul>
                </nav>

                <div className="right-main-header">
                    <div className={`install-button ${installButtonColor}`}>
                        <i className="fas fa-download"></i>
                        Install Coal</div>
                    {this.props.loggedIn ? <div className="loggedIn-right-header">
                        <div className="envelope">
                    <i className="fas fa-envelope"></i>
                        </div>
                       
                            <HeaderDropDownContainer buttonName={"username-button"}titleItem={<p className="username-dropdown">{this.props.username}<i className="fas fa-caret-down"></i></p>}listItems={
                            [<a href="">View profile</a>, 
                            <a href="">Account details</a>, 
                                    <button onClick={this.props.logoutUser}>Logout: <span className="yellow-text">{this.props.username}</span></button>,
                            <a href="">Preferences</a>, 
                            <a href="">Change language</a>]}/>
                        <div className="profile-pic">
                            <img  src={window.cubeURL} alt="Profile pic" />
                        </div>
                    
                    </div>
                    : 
                    <div className="loggedOut-right-header">
                        <Link to="/login">login</Link> 
                                <p>| <span className="pretend-link">language</span><i className="fas fa-caret-down" /> </p>
                    </div> }
                </div>
            </div>
        )
    }
}

export default MainHeader;
