import React from 'react';
import LibraryDropdown from '../dropdowns/library_dropdown';
import { Link } from 'react-router-dom';
export default (props) => {
    const game = props.game;

    const titleCard = game.titleCard[0];
    return (
        <div className="library-index-item">
            <div className="title-card">
                <img src={titleCard.img_url} />
            </div>
            <div className="words">
                <div>{game.id}</div>
                <div className="title">{game.title}</div>
                <div className="hours"></div>
                <div className="link-drop-downs">
                    <LibraryDropdown
                        buttonName="links-button"
                        titleItem={
                            <p className="links-dropdown">
                                Links<i className="fas fa-caret-down"></i>
                            </p>
                        }
                        listItems={[<Link to={`/api/games/${game.id}`}>Visit the Store Page</Link>]}
                    />
                </div>
            </div>
        </div>
    );
};
