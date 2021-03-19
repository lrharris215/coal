export const getAllGames = () => {
    return $.ajax({
        method: "GET",
        url: "/api/games"
    })
}

export const getOneGame = (gameId) => {
    return $.ajax({
        method: "GET",
        url: `/api/games/${gameId}`
    })
}

export const getFeaturedGames = () => {
    return $.ajax({
        method: "GET", 
        url: "/api/games/featured"
    })
}