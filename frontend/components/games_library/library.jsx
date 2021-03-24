import React from 'react';

class Library extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
        debugger;
    }
    render() {
        const { users, userId } = this.props;
        const user = users && users[userId];
        debugger;
        if (!user) return <div>No user!</div>;
        return (
            <div>
                Library maybe?!?
                <div>{user.username}</div>
                <div>{this.props.userId}</div>
            </div>
        );
    }
}

export default Library;
