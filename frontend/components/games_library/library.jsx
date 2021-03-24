import React from 'react';
import LibraryIndexItem from './library_index_item.jsx';
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
        const games = user && user.ownedGames;

        if (!user.ownedGames) return <div>No user!</div>;

        const mappedGames = games.map((game) => {
            return (
                <li>
                    <LibraryIndexItem game={game} />
                </li>
            );
        });

        return (
            <div className="library-container">
                <div className="library-div">
                    <div className="username-bar">
                        <div className="profile-pic">
                            <img src={window.cubeURL} alt="Profile pic" />
                        </div>
                        <div className="words">
                            <h1>{user.username}</h1>
                            <i class="fas fa-angle-double-right"></i>
                            <p>Games</p>
                        </div>
                    </div>
                    <div className="library-index">
                        <ul>{mappedGames}</ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Library;
