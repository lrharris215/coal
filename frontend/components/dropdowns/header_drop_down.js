import { connect } from 'react-redux';
import Dropdown from './dropdown'
import React from 'react'

const MSTP = (state) => {
    return {
        klassName: "header-drop-down",
    }
}

export default connect(MSTP)(Dropdown)