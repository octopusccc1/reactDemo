import React, { Component } from 'react';
import Games from './Games';
import GameItem from './GameItem';
Games.GameItem = GameItem;
class Game extends Component {
  render() {
    return(
      <div>
        <Games>
          <Games.GameItem/>
        </Games>
      </div>
      
    )
  }
}

export default Game;