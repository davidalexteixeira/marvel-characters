import React, { PropTypes } from 'react'

let Text = ({children}) => <li>{children}</li>

Text.propTypes = {
   children: PropTypes.string
}

export default Text
