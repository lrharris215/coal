import React from 'react';

class ShoppingCartItemDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePicIdx: 0,
        };
        this.intervalId = null;
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                activePicIdx:
                    this.state.activePicIdx === Object.values(this.props.game.gameImages).length - 2
                        ? 0
                        : this.state.activePicIdx + 1,
            });
        }, 5 * 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        const { game } = this.props;
        const screenshots = Object.values(game.gameImages).filter((image) => image.img_type === 'screenshot');

        return (
            <div className="sc-item-detail">
                <h4>{game.title}</h4>
                <p>
                    {new Date(game.release_date).toLocaleDateString('en-us', {
                        timeZone: 'utc',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                    })}
                </p>
                <img className="screenshot" src={screenshots[this.state.activePicIdx].img_url} />
                <div className="reveiw-box"></div>
                <div className="tag-box">
                    <p>User tags</p>
                    <div className="tags">
                        <div className="tag">Tag1</div>
                        <div className="tag">Tag2</div>
                        <div className="tag">Tag3</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ShoppingCartItemDetail;
