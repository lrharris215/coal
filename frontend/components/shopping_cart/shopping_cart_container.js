import React from 'react'
import { connect } from 'react-redux';
import ShoppingCart from './shopping_cart';
import createNewPurchase from '../../actions/purchases_actions'

const MSTP = state => {
    return {
       currentUserId: state.session.id
    }
}

const MDTP = dispatch => {
    return {
        createNewPurchase: (purchase) => dispatch(createNewPurchase(purchase))
    }
}

export default connect(MSTP, MDTP)(ShoppingCart)