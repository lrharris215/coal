import React from 'react'

export default (props) => {
    return (
        <div className="index-right-side">
            <div className="game-detail-tab">
                <div className="top-part">
                    <h3>{props.game.title}</h3>
                    <ul>
                        {props.screenshots.map((pic) => {
                            return (
                                <li key={`index-img-${pic.id}`}>
                                    <div className="game-index-screenshots">
                                        <img src={pic.img_url}></img>
                                    </div>
                                </li>
                            )
                        }
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

