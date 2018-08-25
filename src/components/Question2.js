import React, { Component } from 'react';

export default class Question2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: '',
      items: []
    }
  }

  renderItems = () => {
    const { items } = this.state;
    return items.map((item, index) => {
      return(
        <li className="list-item" key={index}>
          {item}
        </li>
      )
    })
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  }

  addToList = () => {
    const { item, items } = this.state;

    if (item) {
      this.setState({
        items: [...items, item],
        item: ''
      })
    }
  }

  render() {
    const { item } = this.state;
    return (
      <div className="center">
        <h2> Add Items to list </h2>
        <div className="input-action mg-t-50">
          <input 
            type="text"
            value={item}
            placeholder="Type the item name"
            className="item-input"
            onChange={(e) => this.handleChange(e)}
          />
          <button
           className="button"
           onClick={this.addToList}
          >
            Add To List
          </button>
        </div>
        <div className="list-container">
          <ul className="list">
            {this.renderItems()}
          </ul>
        </div>
      </div>
    )
  }
}