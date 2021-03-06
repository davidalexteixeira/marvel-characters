import React, { PropTypes } from 'react'
import  Text  from './Text'
import './SelectedList.css'

function renderText ({id, text}) {
//  
// console.log(id, text)
  return <Text key={id}>{text}</Text>
}

function filterText(searchValue) {
 
  return ({text}) => {
    if(searchValue.includes(text.toLowerCase())) {
    return text.includes(text.toLowerCase());
    } else if (searchValue.length <= 0) {
    return text;
    }
  } 
  

}

function SelectedList({ searchValue, list }) {

  return (
    <ul className="SelectedList">
      {list
        .filter(filterText(searchValue))
        .map(renderText)}
    </ul>
  )
}

SelectedList.propTypes = {
   searchValue: PropTypes.string.isRequired,
   list: PropTypes.arrayOf(PropTypes.shape({
     id: PropTypes.number.isRequired,
     text: PropTypes.string.isRequired,
   })).isRequired,
}

export default SelectedList
