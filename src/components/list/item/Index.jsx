import React from 'react'
import Name from './name'
import Delete from './delete/Index.jsx'
import Checkbox from './checkbox'
import './styles.scss'


function Item({id,name,isCompleted,removeTarea,changeComplete}) {
  
  return (
    <div className={isCompleted? "item-container completed":"item-container"}>
        <Checkbox changeComplete={changeComplete} id={id}/>
        <Name name={name} id={id}/>
        <Delete removeTarea={removeTarea} id={id}/>
    </div>
  )
}

export default Item
