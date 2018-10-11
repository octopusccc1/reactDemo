import React, { Component } from 'react';

class GamesItem extends Component {
  constructor(props) {
    super(props)
  }
  handleClick=()=>{
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <div onClick={this.handleClick}>Games</div>
        
            </div>
    )
  }
}

export default GamesItem;