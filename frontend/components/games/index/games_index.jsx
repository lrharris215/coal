import React from 'react';
import { Link } from 'react-router-dom'
import GameIndexItem from './games_index_item'

class GamesIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestAllGames();
    }

    render() {
        
        const mappedGames = this.props.games.map((game) => {
            const titleCard = Object.values(game.gameImages).filter((gameImage) => gameImage.img_type === "title-card")
            return (
                
                <li key={`game-${game.id}`}>
                     <GameIndexItem  game={game}/>
                </li>
            )
        })
        return (
            <div className="index-container">
                <div className="index-left-side">
                    <ul>
                        {mappedGames}
                    </ul>
                </div>
                <div className="index-right-side">
                    {/*<GameIndexDetail /> */}
                </div>
            </div>
        )
    }

}

export default GamesIndex;