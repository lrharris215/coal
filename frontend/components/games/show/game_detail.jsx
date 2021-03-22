import React from 'react';

import BuyNowBar from './buy_now_bar';

class GameDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePicIdx: 0,
        };
        this.intervalId = null;
        this.debounceInterval = this.debounceInterval.bind(this);
    }
    componentDidMount() {
        this.props.requestOneGame(this.props.gameId);
        this.debounceInterval();
    }
    componentDidUpdate(oldProps, oldState) {
        if (oldState.activePicIdx === null && this.props.games.length > 0) {
            this.setState({
                activePicIdx: 0,
            });
        }
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    debounceInterval() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }

        this.intervalId = setInterval(() => {
            console.log(this.props.games[this.props.gameId].gameImages.length);
            this.setState({
                activePicIdx:
                    this.state.activePicIdx === Object.values(this.props.games[this.props.gameId].gameImages).length - 2
                        ? 0
                        : this.state.activePicIdx + 1,
            });
        }, 5 * 1000);
    }
    render() {
        const { gameId, games } = this.props;
        const game = games && games[gameId];
        const titleCard = game && Object.values(game.gameImages).filter((image) => image.img_type === 'title-card');

        const screenshots = game && Object.values(game.gameImages).filter((image) => image.img_type === 'screenshot');

        const reviewNum = game && game.id * 1047 + 453;
        const bgStyle = game && {
            backgroundImage: `url(${screenshots[0].img_url})`,
            backgroundSize: 'cover',
        };
        if (!game) {
            return <div></div>;
        }
        return (
            <div className="game-show-page">
                <img className="background" src={screenshots[0].img_url} />
                <div className="game-detail-container">
                    <div className="game-detail-header">
                        <div className="gd-header-left">
                            <p>
                                <span>All Games</span> {'>'} <span>Indie Games </span>
                                {'>'} <span>{game.title}</span>
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
                                        <div
                                            className={
                                                idx === this.state.activePicIdx ? 'screenshot active' : 'screenshot'
                                            }>
                                            <img
                                                onClick={() => {
                                                    this.debounceInterval();
                                                    this.setState({
                                                        activePicIdx: idx,
                                                    });
                                                }}
                                                src={screenshot.img_url}
                                                alt={`screenshot #${idx + 1} from ${game.title}`}
                                            />
                                        </div>
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
                            <div className="bottom-half">
                                <div className="reviews-left">
                                    <p>Recent Reviews:</p>
                                    <p>All Reviews:</p>
                                </div>
                                <div className="reviews-right">
                                    <p>
                                        <span>Overwhelmingly Positive</span> {`(${Math.floor(reviewNum * (1 / 20))})`}
                                    </p>
                                    <p>
                                        <span>Overwhelmingly Positive</span> {`(${reviewNum})`}
                                    </p>
                                </div>

                                <p className="releaseDate">Release Date:</p>
                                <p className="date">
                                    {new Date(game.release_date).toLocaleDateString('en-us', {
                                        timeZone: 'utc',
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric',
                                    })}
                                </p>
                                <div className="devpub-left">
                                    <p>Developer:</p>
                                    <p>Publisher:</p>
                                </div>
                                <div className="devpub-right">
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
                <BuyNowBar game={game} />
            </div>
        );
    }
}

export default GameDetail;
