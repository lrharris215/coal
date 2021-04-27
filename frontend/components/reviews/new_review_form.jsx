import React from 'react';

class NewReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            recommended: true,
        };
    }
    componentDidMount() {
        this.props.requestOneGame(this.props.gameId);
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value,
            });
        };
    }
    handleButton(answer) {
        const yes = document.getElementById('yes');
        const no = document.getElementById('no');
        if (answer === 'yes') {
            this.setState({
                recommended: true,
            });
            yes.className = pressed;
            no.className = unpressed;
        } else if (answer === 'no') {
            this.setState({
                recommended: false,
            });
            yes.className = unpressed;
            no.className = pressed;
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        let newReview = {
            game_id: this.props.gameId,
            author_id: this.props.currentUserId,
            body: this.state.body,
            recommended: this.state.recommended,
        };
        this.props.createNewGameReview(newReview);
    }
    render() {
        const game = this.props.games[this.props.gameId];
        if (!game) return <div>Nothing here!</div>;
        const hoursPlayed = this.props.currentUserId * game.id * 42;
        return (
            <div className="review-form-container">
                <div className="green-header-bar">
                    <div className="in-library">
                        <i class="fas fa-bars"></i> <p>In Library</p>
                    </div>
                    <h3>{game.title} is already in your Coal library</h3>
                </div>
                <div className="install-button-bar">
                    <div className="button install-coal">Install Coal</div>
                    <div className="button play-now">Play Now</div>
                    <div className="stats">{hoursPlayed} hrs on record</div>
                </div>
                <form className="review-form" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="review-form-header">
                        <h3>Write a review for {game.title}</h3>
                        <p>
                            Please describe what you liked or disliked about this game and whether you recommend it to
                            others. <br /> Please remember to be polite and follow the
                            <span className="rules-link"> Rules and Guidelines</span>.
                        </p>
                    </div>
                    <div className="review-form-body">
                        <div className="profile-pic">
                            <img src={window.cubeURL} />
                        </div>
                        <div className="main-body">
                            <textarea name="review-text" id="review-text" onChange={this.update('body')}></textarea>
                            <div className="review-form-footer">
                                <div className="recommended-box">
                                    <p>Do you recommend this game?</p>
                                    <div className="buttons">
                                        <div
                                            id="yes"
                                            className={this.state.recommended ? 'pressed' : 'unpressed'}
                                            onClick={() => this.handleButton('yes')}>
                                            <i className="fas fa-check check"></i>
                                            <i className="fas fa-thumbs-up thumb"></i>
                                            Yes
                                        </div>
                                        <div
                                            id="no"
                                            className={this.state.recommended ? 'unpressed' : 'pressed'}
                                            onClick={() => this.handleButton('no')}>
                                            <i className="fas fa-check check"></i>
                                            <i className="fas fa-thumbs-down thumb"></i>
                                            No
                                        </div>
                                    </div>
                                </div>
                                <button className="button submit-button">Post review</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewReviewForm;
