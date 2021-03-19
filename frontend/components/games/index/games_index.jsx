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
            return (
                
                <li key={`game-${game.id}`}>
                     <GameIndexItem titleCard={titleCard} game={game}/>
                </li>
            )
        })
        const mappedGamesDetails = this.props.games.map((game) => {
            const screenshots = Object.values(game.gameImages).filter((gameImage) => gameImage.img_type === "screenshot")
            return (
                <li key={`game-detail-${game.id}`}>
                <GameIndexDetail screenshots={screenshots} game={game} />
                </li>
            )
        })
        return (
            <div className="index-container">
                <div className="index-left-side">
                    <div className="index-header-row">
                        <p>See more:</p>
                        <div><Link to="">New Releases</Link></div>
                    </div>
                    <ul>
                        {mappedGames}
                    </ul>
                </div>
                <div className="index-right-side">
                    <ul>
                    {mappedGamesDetails}
                    </ul>
                </div>
            </div>
        )
    }

}

export default GamesIndex;