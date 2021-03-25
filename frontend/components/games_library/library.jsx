import React from 'react';
import LibraryIndexItem from './library_index_item.jsx';
class Library extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    componentDidUpdate() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const { users, userId } = this.props;
        const user = users && users[userId];
        const games = user && user.ownedGames;

        if (!user) return <div>No user!</div>;
        const hasGames = games && games.length > 0 ? true : false;
        const mappedGames =
            games &&
            games.map((game, idx) => {
                return (
                    <li key={`library-${idx}`}>
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
                            <div className="words-helper">
                                <h1>{user.username}</h1>
                                <i class="fas fa-angle-double-right"></i>
                                <p>Games</p>
                            </div>
                        </div>
                    </div>
                    <div className="library-nav-bar">
                        <div className="all-games">All Games</div>
                    </div>
                    <div className="library-index">
                        {hasGames ? (
                            <ul>{mappedGames}</ul>
                        ) : (
                            <div className="no-games">Hmm... this user doesn't seem to own any games yet.</div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Library;
