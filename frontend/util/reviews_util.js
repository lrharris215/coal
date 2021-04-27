export const getGameReviews = (gameId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/games/${gameId}/reviews`,
    });
};

export const postGameReview = (review) => {
    return $.ajax({
        method: 'POST',
        url: `/api/games/${review.gameId}/reviews`,
        data: { review },
    });
};

export const updateGameReview = (review) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/reviews/${review.id}`,
        data: { review },
    });
};

export const deleteGameReview = (reviewId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/reviews/${reviewId}`,
    });
};
