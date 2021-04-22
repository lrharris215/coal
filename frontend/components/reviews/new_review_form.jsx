import React from 'react';

class NewReviewForm extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.requestOneGame(this.props.gameId);
    }
    render() {
        const game = this.props.games[this.props.gameId];

        return (
            <div className="review-form-container">
                <div className="green-header-bar"></div>
                <div className="install-button-bar"></div>
                <form className="review-form">
                    <div className="review-form-header">
                        <h3>Write a review for {game.title}</h3>
                        <p>
                            Please describe what you liked or disliked about this game and whether you recommend it to
                            others. Please remember to be polite and follow the{' '}
                            <span className="rules-link">Rules and Guidelines</span>.
                        </p>
                    </div>
                    <div className="review-form-body">
                        <div className="profile-pic">
                            <img src={window.cubeURL} />
                        </div>
                        <div className="main-body">
                            <textarea name="review-text" id="review-text" cols="30" rows="10"></textarea>
                            <div className="review-form-footer">
                                <div className="recommended-box">
                                    <p>Do you recommend this game?</p>
                                    <div className="buttons">
                                        <div className="yes">Yes</div>
                                        <div className="no">No</div>
                                    </div>
                                </div>
                                <button>Post Review</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewReviewForm;
