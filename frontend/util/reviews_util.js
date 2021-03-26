export const getGameReviews = gameId => {
return $.ajax({
    method: "GET",
    url: `/api/games/${gameId}/reviews`
})
}

export const postGameReview = (gameId, review) => {
return $.ajax({
    method: "POST",
    url: `/api/games/${gameId}/reviews`,
    data: { review }
})
}