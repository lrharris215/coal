import React from 'react';

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
            <div>
                {this.props.errors ? <div className="login-errors">{this.props.errors}</div> : null }
                <form onSubmit={this.handleSubmit}>
                    
                    <label>Username
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
        )
    }
}

export default SessionForm;