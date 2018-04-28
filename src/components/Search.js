import React, { PropTypes } from 'react'

import './Search.css'


function Search(props) {
  return (
    <input className="Search" value={props.searchValue} onChange={props.onChange}/>
  )
}

Search.propTypes = {
   searchValue: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
}

export default Search
