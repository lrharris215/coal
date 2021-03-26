import React from 'react';

class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestAllGameReviews(this.props.gameId);
    }
    render() {
        const { reviews, gameId } = this.props;
        const mappedReviews = reviews.map((review) => {
            return <div></div>;
        });
        return <div>{mappedReviews}</div>;
    }
}

export default ReviewsIndex;
