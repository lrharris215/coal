import React from 'react';
import ReviewsIndexItem from './reviews_index_item';
import NewReviewFormContainer from './new_review_form_container';

class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasReviewed: false,
        };
    }

    componentDidMount() {
        if (this.props.currentUserId) {
            this.props.fetchUser(this.props.currentUserId);
            this.checkIfReviewed();
        }
        this.props.requestAllGameReviews(this.props.gameId);
    }
    componentDidUpdate(prevProps) {
        if (this.props.currentUserId && this.props.reviews !== prevProps.reviews) {
            this.checkIfReviewed();
            this.checkIfOwned();
        }
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
                this.setState({
                    hasReviewed: true,
                });
                return;
            }
        }
        this.setState({
            hasReviewed: false,
        });
        return;
    }
    render() {
        const { reviews, gameId } = this.props;

        const mappedReviews = reviews.map((review, idx) => {
            return (
                <li key={`review-${idx}`}>
                    <ReviewsIndexItem
                        deleteGameReview={this.props.deleteGameReview}
                        updateGameReview={this.props.updateGameReview}
                        fetchUser={this.props.fetchUser}
                        users={this.props.users}
                        review={review}
                        currentUserId={this.props.currentUserId}
                    />
                </li>
            );
        });

        return (
            <div className="reviews-index-container">
                <div className="reviews-index">
                    <div className="reviews-header">
                        <h4>Customer Reviews</h4>
                    </div>
                    {this.owned && !this.state.hasReviewed ? <NewReviewFormContainer gameId={this.props.gameId} /> : ''}
                    <ul className="reviews-list">{mappedReviews}</ul>
                </div>
            </div>
        );
    }
}

export default ReviewsIndex;
