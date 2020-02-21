import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(){
    super();
    this.state = {
      chosenMenu: null,
      previousClick: null,
      activeClick: null,
    }
  }

  chooseDetails = (choice, oldClick) => {

    this.setState({
      chosenMenu: choice,
      previousClick: oldClick,
      activeClick: choice
    })
  }


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = 
      (this.state.chosenMenu=== null)?
        <div>Nothing chosen</div> : 
          (this.state.chosenMenu==="profile")?
          <Profile /> : 
          (this.state.chosenMenu==="photo")?
            <Photos /> :
            (this.state.chosenMenu==="cocktail")?
            <Cocktails /> : <Pokemon /> 

    return (
      <div>
        <MenuBar menuChooser={this.chooseDetails} previousClick={this.state.previousClick} currentClick={this.state.activeClick}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
