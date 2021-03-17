import { connect } from 'react-redux';
import Dropdown from './dropdown'
import React from 'react'

const MSTP = (state) => {
    return {
        klassName: "store-dropdown",
    }
}

export default connect(MSTP)(Dropdown)