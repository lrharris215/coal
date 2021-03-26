import React from 'react';

class ReviewsIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchUser(this.props.review.author_id);
    }
    render() {
        const { users, review } = this.props;

        if (Object.values(users).length < 1 || !users[review.author_id]) {
            return <div>Nothing here??</div>;
        }
        debugger;
        return (
            <div className="review-index-item">
                <div className="review-item-header">
                    <div className="ri-header-left">
                        <div className="profile-pic">
                            <img src={window.cubeURL} alt="Profile pic" />
                        </div>
                        <div className="user-info">
                            <h5>{users[review.author_id].username}</h5>
                        </div>
                    </div>
                    <div className="ri-header-right"></div>
                </div>
                <div className="review-item-body"></div>
            </div>
        );
    }
}
export default ReviewsIndexItem;
