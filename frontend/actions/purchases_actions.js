import * as purchasesUtil from '../util/purchases_util'

export const RECEIVE_PURCHASE = "RECEIVE_PURCHASE"

const receivePurchase = (purchase) => {
    return {
        type: RECEIVE_PURCHASE,
        purchase,
    }
}
export const createNewPurchase = purchase => dispatch => {
    return (
        purchasesUtil.postPurchase(purchase).then((purchase) => dispatch(receivePurchase(purchase)))
    )
}