import React from 'react';

class NewReviewForm extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    render() {
        return <div>{this.props.gameId} MAKE A REVIEW</div>;
    }
}

export default NewReviewForm;
