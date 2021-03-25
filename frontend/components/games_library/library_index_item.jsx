import React from 'react';

export default (props) => {
    const game = props.game;
    debugger;
    // const titleCard = game.gameImages.filter((image) => image.img_type === 'title-card');
    return (
        <div className="library-index-item">
            <div className="titleCard">{/* <img src={titleCard.img_url} /> */}</div>
            <div>{game.id}</div>
            <div className="title">{game.title}</div>
            <div className="hours"></div>
            <div className="link-drop-downs"></div>
        </div>
    );
};
