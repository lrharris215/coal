import React from 'react';
import LibraryDropdown from '../dropdowns/library_dropdown';
import { Link } from 'react-router-dom';
export default (props) => {
    const game = props.game;

    const titleCard = game.titleCard[0];
    const hoursPlayed = game.id * 42;
    return (
        <div className="library-index-item">
            <div className="title-card">
                <img src={titleCard.img_url} />
            </div>
            <div className="words">
                <div className="title">{game.title}</div>
                <div className="hours">{hoursPlayed} hrs on record</div>
                <div className="link-drop-downs">
                    <LibraryDropdown
                        buttonName="links-button"
                        titleItem={
                            <p className="links-dropdown">
                                <i className="fas fa-link"></i> <span>Links</span>
                                <i className="fas fa-caret-down"></i>
                            </p>
                        }
                        listItems={[<Link to={`/api/games/${game.id}`}>Visit the Store Page</Link>]}
                    />
                </div>
            </div>
        </div>
    );
};
