import React from 'react';
import { Link } from 'react-router-dom'
import GameIndexItem from './games_index_item'
import GameIndexDetail from './games_index_detail'

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
            const screenshots = Object.values(game.gameImages).filter((gameImage) => gameImage.img_type === "screenshot")
            debugger
            return (
                
                <li key={`game-${game.id}`}>
                     <GameIndexItem titleCard={titleCard} game={game}/>
                    <GameIndexDetail screenshots={screenshots} game={game}/>
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