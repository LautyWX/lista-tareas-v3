import React from 'react'
import './styles.scss'

function Text({setTextInput}) {

  return (
    <input 
      type="text"
      onChange={(event) => {setTextInput(event.target.value)}}
      className="input-text" 
      placeholder='"tender la ropa","rendir calculo 1","rendir Ing. de software 2"'
      ></input>
  )
}

export default Text
