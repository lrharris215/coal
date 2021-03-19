import React from 'react';


export default (props) => {
    debugger
    return (
        <div className="games-index-item">
            <div className="index-left-side">
                <div className="titleCard-box">
                    <img src={props.titleCard[0].img_url} />
                </div>
                <h4>{props.game.title}</h4>
                <p>${props.game.price / 100}</p>
            </div>
        </div>
      
    )
}