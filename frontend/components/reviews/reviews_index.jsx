import React from 'react';
import ReviewsIndexItem from './reviews_index_item';
import NewReviewFormContainer from './new_review_form_container';

class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasReviewed: false,
        };
        this.sortReviewsByMostRecent = this.sortReviewsByMostRecent.bind(this);
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
        } else if (this.props.currentUserId !== prevProps.currentUserId) {
            this.setState({
                hasReviewed: false,
                owned: false,
            });
        }
    }
    sortReviewsByMostRecent(a, b) {
        if (a.created_at > b.created_at) {
            return -1;
        } else if (a.created_at === b.created_at) {
            return 0;
        } else return 1;
    }
    checkIfOwned() {
        let gamesList = this.props.users[this.props.currentUserId].ownedGames;

        if (gamesList) {
            for (let i = 0; i < gamesList.length; i++) {
                if (gamesList[i].id.toString() === this.props.gameId) {
                    this.setState({
                        owned: true,
                    });
                    return;
                }
            }
            this.setState({
                owned: false,
            });
            return;
        } else {
            this.setState({
                owned: false,
            });
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
        let sortedReviews = reviews && [...reviews].sort(this.sortReviewsByMostRecent);

        const mappedReviews = sortedReviews.map((review, idx) => {
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
                    {this.state.owned && !this.state.hasReviewed ? (
                        <NewReviewFormContainer gameId={this.props.gameId} />
                    ) : (
                        ''
                    )}
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
