import React, { Component } from 'react';

export default class Question3 extends Component {

  renderGrid = () => {
    const grid = [];
    for(let i = 0; i< 4; i++) {
      grid.push( 
        <div className="grid-col" key={i}>
          <div className="grid-row">
            <div className="grid-col">
              c-1
            </div>
            <div className="grid-col">
              c-2
            </div>
            <div className="grid-col">
              c-3
            </div>
            <div className="grid-col">
              c-4
            </div>
          </div>
        </div> 
      )
    };
    return grid;
  }

  render() {
    return (
      <div className="mg-t-50">
        <div className="grid-row">
          {this.renderGrid()}
        </div>
      </div>
    )
  }
} 