import React from 'react'
import "./styles.scss"

function Checkbox({changeComplete,id}) {
  const handleClick = () => {
    console.log(id);
    changeComplete(id);
  }
  return (
    <input onClick={handleClick} className='item-checkbox' type='checkbox'></input>
  )
}

export default Checkbox
