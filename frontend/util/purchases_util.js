export const postPurchase = purchase => {
    return $.ajax({
        method: "POST",
        url: "api/purchases",
        data: { purchase }
    })
}