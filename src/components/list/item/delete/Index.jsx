import React from 'react'
import "./styles.css"
import deleteIcon from "./icon.png"


function Delete({removeTarea,id}) {
  const handleClick = () => {
    removeTarea(id);
  }

  return (
    <img 
      onClick={handleClick}
      className="delete-icon" 
      src={deleteIcon} 
      alt="delete" 
    />
  )
}

export default Delete
