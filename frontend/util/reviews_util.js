export const getGameReviews = (gameId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/games/${gameId}/reviews`,
    });
};

export const postGameReview = (review) => {
    debugger;
    return $.ajax({
        method: 'POST',
        url: `/api/games/${review.gameId}/reviews`,
        data: { review },
    });
};
