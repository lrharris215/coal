import React from 'react';

class GameDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePicIdx: 0,
        };
    }
    componentDidMount() {
        this.props.requestOneGame(this.props.gameId);
    }
    componentDidUpdate(oldProps, oldState) {
        debugger;
        if (oldState.activePicIdx === null && this.props.games.length > 0) {
            this.setState({
                activeGameIdx: 0,
            });
        }
    }
    render() {
        const { gameId, games } = this.props;
        const game = games && games[gameId];

        const titleCard = game && Object.values(game.gameImages).filter((image) => image.img_type === 'title-card');
        const screenshots = game && Object.values(game.gameImages).filter((image) => image.img_type === 'screenshot');
        debugger;
        if (!game) {
            return <div></div>;
        }
        return (
            <div className="game-detail-container">
                <div className="game-detail-header">
                    <div className="gd-header-left">
                        <p>
                            All Games {'>'} Indie Games {'>'} {game.title}
                        </p>
                        <h2>{game.title}</h2>
                    </div>
                    <div className="gd-header-right">
                        <div className="community-hub">Community Hub</div>
                    </div>
                </div>
                <div className="game-detail-main">
                    <div className="game-detail-left">
                        <div className="big-picture">
                            <img
                                src={screenshots[this.state.activePicIdx].img_url}
                                alt={`screenshot from ${game.title}`}
                            />
                        </div>
                        <div className="screenshots">
                            {screenshots.map((screenshot, idx) => {
                                return (
                                    <img
                                        className="screenshot"
                                        src={screenshot.img_url}
                                        alt={`screenshot #${idx + 1} from ${game.title}`}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="game-detail-right">
                        <div className="title-card">
                            <img src={titleCard[0].img_url} />
                        </div>
                        <div className="description">
                            <p>{game.description}</p>
                        </div>
                        <div className="reviews"></div>
                        <div className="release-date">
                            <p>Release Date:</p>
                            <p>{game.release_date}</p>
                        </div>
                        <div className="developer-box">
                            <div>
                                <p>Developer:</p>
                                <p>Publisher:</p>
                            </div>
                            <div>
                                <p>{game.developer}</p>
                                <p>{game.publisher}</p>
                            </div>
                        </div>
                        <div className="popular-tags">
                            <p>Popular user-defined tags for this product:</p>
                            <div className="tags">
                                <div className="tag">Tag-1</div>
                                <div className="tag">Tag-2</div>
                                <div className="tag">Tag-3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameDetail;
