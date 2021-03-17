import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: "",
            email: "",
        }
        this.guest = {
            username: "Guest",
            password: "password"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user)      
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value,
        })
    }

    render() {
        return (
            <div className={this.props.klassName}>
                <div className="left-login-section">
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <h2>{this.props.formType}</h2>
                        {(this.props.errors.length) ? <div className="login-errors">{this.props.errors}</div> : null}

                        <label>Coal account name
                        <input type="text" value={this.state.username} onChange={this.update('username')} />
                        </label>

                        {this.props.formType === "Sign up" ? 
                            <label>Email
                                <input type="text" value={this.state.email} onChange={this.update('email')} />
                            </label>
                        : null}

                        <label>Password 
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                        </label>

                        {this.props.formType === "Sign up" ? 
                        <div>
                        <div className="captcha-box">
                            <label>
                                    <input type="checkbox" /> <p>I am not a robot</p> 
                            </label>
                            <i className="fas fa-recycle"></i>
                        </div>
                        <div className="age-check">
                            <label>
                                <input type="checkbox"/>
                                        I am 13 years or older and agree to the terms of the <Link to="">Coal Subscriber Agreement</Link> and the <Link to="">Gears Privacy Policy.</Link>
                            </label>
                        </div>
                        </div>
                        :
                        null
                        }
                        
                        <button>{this.props.formType}</button>
                        {this.props.formType === "Sign in" ? 
                        <div className="login-bottom">
                            <p className="forgot-pw" onClick={() => alert("Too bad")}>Forgot your password?</p>
                            <button className="guest-button" onClick={() => this.props.action(this.guest)}>Sign in as Guest!</button>
                        </div> :
                        null }
                    </form>
                </div>
                {this.props.formType === "Sign in" ? 
                    <div className="right-login-section">
                        <p>Join Coal and discover dozens of games to play.</p>
                        <Link className="learn-more" to="/">Learn More</Link>

                        <div className="computerImage">
                            <img src={window.joinPic} alt="Computer image" />
                            <p>It's free and easy to use.</p>
                            <Link className="join-button" to="/signup">Join Coal</Link>
                        </div>

                      
                    </div>
                    : <div className="right-login-section"></div>
                    }
                
            </div>
        )
    }
}

export default SessionForm;