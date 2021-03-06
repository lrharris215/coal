import React from 'react';

export default (props) => {
    const reviewNum = props.game && props.game.id * 1047 + 453;
    return (
        <div className={props.isActive ? 'active' : 'hidden'}>
            <div className="game-detail-tab">
                <div className="top-part">
                    <h3>{props.game.title}</h3>
                    <div className="review-box">
                        <p>Overall user reviews: </p>
                        <p>
                            <span>Very positive </span>({reviewNum})
                        </p>
                    </div>
                    <div className="categories" data-tip data-for="fake-link">
                        Categories
                    </div>
                </div>
                <div className="image-list">
                    <ul>
                        {props.screenshots.map((pic) => {
                            return (
                                <li key={`index-img-${pic.id}`}>
                                    <div className="game-index-screenshots">
                                        <img src={pic.img_url}></img>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
