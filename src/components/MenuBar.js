import React from 'react'


const menuClickHandler = (event, props) =>{

  let currentEvent = event.target.id;
  let formerClick = props.currentClick;

  props.menuChooser(currentEvent, formerClick)
  
  if(event.target.nodeName==="A"){
    event.target.className = "item active";
  }
  else if(event.target.nodeName==='I'){
    event.target.parentElement.className = "item active";
  }

  let previousElement = document.getElementById(formerClick)
  if(previousElement){
    previousElement.className = "item";
  }
}

const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  // console.log(`menu choose`, props.menuChooser)

 
  // console.log('Previous click', props.previousClick)

  return (
    <div className="ui four item menu">
      <a className="item" id="profile" onClick={(event)=> {menuClickHandler(event, props)}}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className="item" id="photo" onClick={(event)=> {menuClickHandler(event, props)}}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className="item" id="cocktail" onClick={(event)=> {menuClickHandler(event, props)}}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className="item" id="pokemon" onClick={(event)=> {menuClickHandler(event, props)}}> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
