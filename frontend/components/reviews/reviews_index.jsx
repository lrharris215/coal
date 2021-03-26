import React from 'react';
import ReviewsIndexItem from './reviews_index_item';

class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestAllGameReviews(this.props.gameId);
    }

    render() {
        const { reviews, gameId } = this.props;

        const mappedReviews = reviews.map((review, idx) => {
            return (
                <li key={`review-${idx}`}>
                    <ReviewsIndexItem fetchUser={this.props.fetchUser} users={this.props.users} review={review} />
                </li>
            );
        });
        return (
            <div className="reviews-index-container">
                <div className="reviews-index">
                    <div className="reviews-header">
                        <h4>Customer Reviews</h4>
                    </div>
                    <ul className="reviews-list">{mappedReviews}</ul>
                </div>
            </div>
        );
    }
}

export default ReviewsIndex;
