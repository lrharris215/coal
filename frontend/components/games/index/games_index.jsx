import React from 'react';
import { Link } from 'react-router-dom';
import GameIndexItem from './games_index_item';
import GameIndexDetail from './games_index_detail';

class GamesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGame: null,
        };
        this.sortGamesByReleaseDate = this.sortGamesByReleaseDate.bind(this);
    }

    componentDidMount() {
        this.props.requestAllGames();
    }
    componentDidUpdate(oldProps, oldState) {
        if (oldState.activeGame === null && this.props.games.length > 0) {
            this.setState({
                activeGame: this.props.games[0].id,
            });
        }
    }
    sortGamesByReleaseDate(a, b) {
        if (a.release_date > b.release_date) {
            return -1;
        } else if (a.release_date === b.release_date) {
            return 0;
        } else return 1;
    }

    render() {
        let sortedGames = this.props.games && [...this.props.games].sort(this.sortGamesByReleaseDate);

        const mappedGames = sortedGames.map((game) => {
            const titleCard = Object.values(game.gameImages).filter((gameImage) => gameImage.img_type === 'title-card');

            return (
                <li
                    key={`game-${game.id}`}
                    onMouseEnter={() => {
                        this.setState({ activeGame: game.id });
                    }}>
                    <GameIndexItem isActive={this.state.activeGame === game.id} titleCard={titleCard} game={game} />
                </li>
            );
        });
        const mappedGamesDetails = this.props.games.map((game) => {
            const screenshots = Object.values(game.gameImages).filter(
                (gameImage) => gameImage.img_type === 'screenshot'
            );
            return (
                <li key={`game-detail-${game.id}`}>
                    <GameIndexDetail
                        isActive={this.state.activeGame === game.id}
                        screenshots={screenshots}
                        game={game}
                    />
                </li>
            );
        });

        return (
            <div className="index-container">
                <div className="index-left-side">
                    <div className="index-header-row">
                        <p>See more:</p>
                        <div>
                            <Link to="">New Releases</Link>
                        </div>
                    </div>
                    <ul>{mappedGames}</ul>
                </div>
                <div className="index-right-side">
                    <ul>{mappedGamesDetails}</ul>
                </div>
            </div>
        );
    }
}

export default GamesIndex;
