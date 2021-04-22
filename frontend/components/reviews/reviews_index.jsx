import React from 'react';
import ReviewsIndexItem from './reviews_index_item';
import NewReviewForm from './new_review_form';

class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.hasReviewed = false;
    }

    componentDidMount() {
        this.props.requestAllGameReviews(this.props.gameId);
        this.checkIfReviewed();
    }
    componentDidUpdate() {
        this.checkIfReviewed();
        this.checkIfOwned();
    }
    checkIfOwned() {
        let gamesList = this.props.users[this.props.currentUserId].ownedGames;

        if (gamesList) {
            for (let i = 0; i < gamesList.length; i++) {
                if (gamesList[i].id.toString() === this.props.gameId) {
                    this.owned = true;
                    return;
                }
            }
            this.owned = false;
            return;
        } else {
            this.owned = false;
        }
    }
    checkIfReviewed() {
        for (let i = 0; i < this.props.reviews.length; i++) {
            if (this.props.reviews[i].author_id === this.props.currentUserId) {
                this.hasReviewed = true;
                return;
            }
        }
        this.hasReviewed = false;
        return;
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
                        {this.owned && !this.hasReviewed ? (
                            <NewReviewForm requestOneGame={this.props.requestOneGame} gameId={this.props.gameId} />
                        ) : (
                            ''
                        )}
                    </div>
                    <ul className="reviews-list">{mappedReviews}</ul>
                </div>
            </div>
        );
    }
}

export default ReviewsIndex;
