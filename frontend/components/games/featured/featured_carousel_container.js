import FeaturedCarousel from "./featured_carousel"
import { connect } from 'react-redux'
import { requestFeaturedGames, requestOneGame } from '../../../actions/games_actions'
import { Link, Route } from "react-router-dom"

const MSTP = (state) => {
    return {
        games: Object.values(state.entities.games).filter((game) => game.featured)
    }
}

const MDTP = dispatch => {
    return {
        requestFeaturedGames: () => dispatch(requestFeaturedGames()),
        
    }
}

export default connect(MSTP, MDTP)(FeaturedCarousel)