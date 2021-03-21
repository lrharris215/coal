import React from 'react';
import { Link } from 'react-router-dom';
class FeaturedCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGameIdx: null,
            activePicIdx: 0,
        };
        this.intervalId = null;
        this.debounceInterval = this.debounceInterval.bind(this);
    }

    componentDidMount() {
        this.props.requestFeaturedGames();
        this.debounceInterval();
    }

    debounceInterval() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        this.intervalId = setInterval(() => {
            this.setState({
                activeGameIdx:
                    this.state.activeGameIdx === this.props.games.length - 1 ? 0 : this.state.activeGameIdx + 1,
            });
        }, 5 * 1000);
    }
    componentDidUpdate(oldProps, oldState) {
        if (oldState.activeGameIdx === null && this.props.games.length > 0) {
            this.setState({
                activeGameIdx: 0,
            });
        }
    }
    render() {
        const { games } = this.props;

        return (
            <div className="featured-carousel-outer-div">
                <h2>Featured & Recommended</h2>
                <div>
                    <div
                        className="left-arrow"
                        onClick={() => {
                            this.debounceInterval();
                            this.setState((state) => ({
                                activeGameIdx: state.activeGameIdx === 0 ? games.length - 1 : state.activeGameIdx - 1,
                            }));
                        }}>
                        <i className="fas fa-chevron-left"></i>
                    </div>
                    <ul>
                        {games.map((game, idx) => {
                            const allImages = Object.values(game.gameImages);
                            const titleCard = Object.values(game.gameImages).filter(
                                (gameImage) => gameImage.img_type === 'title-card'
                            );
                            const screenshots = Object.values(game.gameImages).filter(
                                (gameImage) => gameImage.img_type === 'screenshot'
                            );
                            return (
                                <div className={this.state.activeGameIdx === idx ? 'active' : 'hidden'}>
                                    <Link to={`api/games/${game.id}`}>
                                        <div
                                            className="featured-carousel-inner-div"
                                            onMouseEnter={() => clearInterval(this.intervalId)}
                                            onMouseLeave={() => this.debounceInterval()}>
                                            <div className="big-image">
                                                <img
                                                    src={allImages[this.state.activePicIdx].img_url}
                                                    alt={`${game.title}-title-card`}
                                                />
                                            </div>
                                            <div className="featured-right-side">
                                                <h2 className="title">{game.title}</h2>
                                                <div className="four-pic-box">
                                                    {screenshots.map((screenshot) => {
                                                        return (
                                                            <div
                                                                className="screenshot-div"
                                                                onMouseEnter={() => {
                                                                    this.setState((state) => ({
                                                                        activePicIdx: allImages.indexOf(screenshot),
                                                                    }));
                                                                }}
                                                                onMouseLeave={() => {
                                                                    this.setState((state) => ({
                                                                        activePicIdx: 0,
                                                                    }));
                                                                }}>
                                                                <img
                                                                    src={screenshot.img_url}
                                                                    alt={`${game.title}-screenshot`}
                                                                />
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                <div className="recommended">
                                                    Now Available <div>Category</div>
                                                </div>
                                                <div className="featured-bottom-row">
                                                    <p>${game.price / 100}</p>
                                                    <i className="fab fa-windows"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </ul>
                    <div
                        className="right-arrow"
                        onClick={() => {
                            this.debounceInterval();
                            this.setState((state) => ({
                                activeGameIdx: state.activeGameIdx === games.length - 1 ? 0 : state.activeGameIdx + 1,
                            }));
                        }}>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
                <div className="bottom-buttons">
                    {games.map((game, idx) => {
                        return (
                            <div
                                className={idx === this.state.activeGameIdx ? 'button-active' : 'button-inactive'}
                                onClick={() => {
                                    this.debounceInterval();
                                    this.setState({
                                        activeGameIdx: idx,
                                    });
                                }}></div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
export default FeaturedCarousel;
