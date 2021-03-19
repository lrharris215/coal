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
        debugger
        const mappedGames = this.props.games.map((game) => {
        
            return (
                <Link to={`/api/games/${game.id}`} component={<GameIndexItem game={game} titleCard={game.gameImages[0]}/>} />
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