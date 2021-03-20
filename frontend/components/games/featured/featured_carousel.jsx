import React from 'react';

class FeaturedCarousel extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestFeaturedGames();
    }
    render() {
        const { games } = this.props;
        return (
            <div className="featured-carousel-div">
                <ul>
                    {games.map((game) => {
                        return <li>{game.title}</li>;
                    })}
                </ul>
            </div>
        );
    }
}
export default FeaturedCarousel;
