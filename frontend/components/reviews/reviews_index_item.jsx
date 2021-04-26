import React from 'react';
import { Link } from 'react-router-dom';

class ReviewsIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchUser(this.props.review.author_id);
    }
    // componentDidUpdate() {
    //     this.props.fetchUser(this.props.review.author_id);
    // }

    render() {
        const { users, review } = this.props;

        if (Object.values(users).length < 1 || !users[review.author_id]) {
            return <div>Nothing here??</div>;
        }

        const author = users[review.author_id];
        if (!author.ownedGames) {
            return <div>Nothing here??</div>;
        }
        return (
            <div className="review-index-item">
                <div className="transition-bar"></div>
                <div className="review-item-header">
                    <div className="ri-header-left">
                        <Link to={`/api/users/${author.id}`}>
                            <div className="profile-pic">
                                <img src={window.cubeURL} alt="Profile pic" />
                            </div>
                        </Link>
                        <Link to={`/api/users/${author.id}`}>
                            <div className="user-info">
                                <h5>{author.username}</h5>

                                <p>{`${author.ownedGames.length} products in account`}</p>
                            </div>
                        </Link>
                    </div>
                    <div className="ri-header-right">
                        {review.recommended ? (
                            <div className="thumbs-box">
                                <i className="fas fa-thumbs-up"></i>
                                Recommended
                            </div>
                        ) : (
                            <div className="thumbs-box">
                                <i className="fas fa-thumbs-down"></i>
                                <span>Not-Recommended</span>
                            </div>
                        )}
                        <div className="logo">
                            <i className="fas fa-cogs"></i>
                        </div>
                    </div>
                </div>
                <div className="review-item-body">
                    <div className="review-body-left"></div>
                    <div className="review-body-right">
                        <p className="date">
                            <span>Posted: </span>
                            {new Date(review.created_at).toLocaleDateString('en-us', {
                                timeZone: 'utc',
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </p>
                        <p className="review-body">{review.body}</p>
                    </div>
                </div>
                <div className="review-item-footer">
                    {author.id === this.props.currentUserId ? (
                        <div className="buttons">
                            <div className="edit-button">Edit</div>
                            <div className="delete-button" onClick={() => this.props.deleteGameReview(review.id)}>
                                Delete
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        );
    }
}
export default ReviewsIndexItem;
