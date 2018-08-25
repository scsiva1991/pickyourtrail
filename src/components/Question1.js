import React, { Component } from 'react';

export default class Question1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movements: [{
        position: 'topLeft',
        prevPosition: 'leftBottom',
        nextPosition: 'topRight'
      }]
    }
  }

  moveTopRight = (rectangle, movements, board, boardContainer) => { 
    rectangle.style.right = `${boardContainer.offsetWidth - (board.offsetWidth + 50)}px`;
    movements.push({
      position: 'topRight',
      prevPosition: 'topLeft',
      nextPosition: 'rightBottom'
    });
    this.setState({ movements });
  }

  moveRightBottom = (rectangle, movements, board, boardContainer) => {
    const totalHeight = window.innerHeight;    
    rectangle.style.bottom = `${totalHeight - (board.offsetHeight + 50)}px`;
    rectangle.style.right = `${boardContainer.offsetWidth - (board.offsetWidth + 50)}px`;
    movements.push({
      position: 'rightBottom',
      prevPosition: 'topRight',
      nextPosition: 'leftBottom'
    });
    this.setState({ movements });
  }

  moveLeftBottom = (rectangle, movements, board) => {
    const totalHeight = window.innerHeight;
    rectangle.style.bottom = `${totalHeight - (board.offsetHeight + 50)}px`;
    rectangle.style.left = '50px';
    movements.push({
      position: 'leftBottom',
      prevPosition: 'rightBottom',
      nextPosition: 'topLeft'
    });
    this.setState({ movements });
  }

  moveTopLeft = (rectangle, movements) => {
    rectangle.style.left = '50px';
    movements.push({
      position: 'topLeft',
      prevPosition: 'leftBottom',
      nextPosition: 'topRight'
    });
    this.setState({ movements });
  }

  handleForward = (isForward) => {    
    let { movements } = this.state;
    const { rectangle, board, boardContainer } = this;
    let currentPosition = '';

    rectangle.removeAttribute("style");
    if (!isForward) {
      currentPosition = movements.pop().prevPosition;
    } else {
      currentPosition = movements.pop().nextPosition;
    }

    if (currentPosition === 'topRight') {
      this.moveTopRight(rectangle, movements, board, boardContainer);
    } else if(currentPosition === 'rightBottom') {
      this.moveRightBottom(rectangle, movements, board, boardContainer);
    } else if(currentPosition === 'leftBottom') {
      this.moveLeftBottom(rectangle, movements, board);
    } else {
      this.moveTopLeft(rectangle, movements);
    } 
    
  }

  render() {
    return(
      <div id="board-container"
      ref={boardContainer => { this.boardContainer = boardContainer } }> 
        <div 
          id="board"
          className="w-80"
          ref={board => { this.board = board } }
        >
          <div 
            id="rectangle"
            ref={rectangle => { this.rectangle = rectangle } }
          />          
        </div>
        <div className="w-20">
          <button className="button" onClick={() => this.handleForward(true)}>Forward</button>
          <button className="button" onClick={() => this.handleForward(false)}>Backward</button>
        </div> 
      </div>
    )
  }
}