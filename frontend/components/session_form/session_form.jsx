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
                    {this.props.errors ? <div className="login-errors">{this.props.errors}</div> : null }
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <h2>{this.props.formType}</h2>
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
                        
                        <button>{this.props.formType}</button>
                    </form>
                </div>
                {this.props.formType === "Sign in" ? 
                    <div className="right-login-section">
                        <p>Join Coal and discover dozens of games to play.</p>
                        <Link to="/">Learn More</Link>

                        <div className="computerImage">

                        </div>

                        <p>It's free and easy to use.</p>
                        <Link to="/signup">Join Coal</Link>
                    </div>
                    :
                    null}
                
            </div>
        )
    }
}

export default SessionForm;