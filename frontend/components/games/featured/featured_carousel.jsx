import React from 'react';

class FeaturedCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGameIdx: null,
        };
    }

    componentDidMount() {
        this.props.requestFeaturedGames();
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
                <h2>Featured and Recommended</h2>
                <div>
                    <div className="left-arrow">
                        <i className="fas fa-chevron-left"></i>
                    </div>
                    <ul>
                        {games.map((game, idx) => {
                            const titleCard = Object.values(game.gameImages).filter(
                                (gameImage) => gameImage.img_type === 'title-card'
                            );
                            const screenshots = Object.values(game.gameImages).filter(
                                (gameImage) => gameImage.img_type === 'screenshot'
                            );
                            return (
                                <div className={this.state.activeGameIdx === idx ? 'active' : 'hidden'}>
                                    <div className="featured-carousel-inner-div">
                                        <div className="big-image">
                                            <img src={titleCard[0].img_url} alt={`${game.title}-title-card`} />
                                        </div>
                                        <div className="featured-right-side">
                                            <h2 className="title">{game.title}</h2>
                                            <div className="four-pic-box">
                                                {screenshots.map((screenshot) => {
                                                    return (
                                                        <div className="screenshot-div">
                                                            <img
                                                                src={screenshot.img_url}
                                                                alt={`${game.title}-screenshot`}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div className="recommended">
                                                Recommended because you played games tagged with <div>category</div>
                                            </div>
                                            <div className="featured-bottom-row">
                                                <p>${game.price / 100}</p>
                                                <i className="fab fa-windows"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </ul>
                    <div className="right-arrow">
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
                <div className="bottom-buttons">
                    {games.map((game, idx) => {
                        return (
                            <div
                                className="bottom-button"
                                onClick={() =>
                                    this.setState({
                                        activeGameIdx: idx,
                                    })
                                }></div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
export default FeaturedCarousel;
