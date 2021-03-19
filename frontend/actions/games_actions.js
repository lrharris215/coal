import * as GamesUtil from "../util/games_util"

export const RECEIVE_GAMES = "RECEIVE_GAMES";
export const RECEIVE_GAME = "RECEIVE_GAME";
export const RECEIVE_FEATURED_GAMES = "RECEIVE_FEATURED_GAMES";

const receiveGames = (games) => {
    return {
        type: RECEIVE_GAMES,
        games,
    }
}

const receiveGame = (game) => {
    return {
        type: RECEIVE_GAME,
        game,
    }
}

export const requestAllGames = () => dispatch => {
    return (
        GamesUtil.getAllGames().then((games) => dispatch(receiveGames(games)))
    )
}

export const requestOneGame = (gameId) => dispatch => {
    return (
        GamesUtil.getOneGame(gameId).then((game) => dispatch(receiveGame(game)))
    )
}

export const requestFeaturedGames = () => dispatch => {
    return (
        GamesUtil.getFeaturedGames().then((games) => dispatch(receiveGames(games)))
    )
}