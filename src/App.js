import './App.css';

import React, { Component } from 'react';

import ListItems from './components/ListItems';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: 0,
      },
    };
  }

  handleInput = (event) => {
    const key = this.state.currentItem.key;
    this.setState({
      currentItem: {
        text: event.target.value,
        key: key,
      },
    });
  };

  addItem = (event) => {
    event.preventDefault();

    const newValue = this.state.currentItem;
    const newKey = newValue.key + 1;

    if (newValue.text !== '') {
      const newItems = [...this.state.items, newValue];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: newKey,
        },
      });
    } else {
      window.alert('Campo vacio :(');
    }
  };

  deleteItem = (key) => {
    const newItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: newItems,
    });
  };

  render() {
    return (
      <div className="App">
        <form className="mainForm" onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Insert item"
            value={this.state.currentItem.text}
            onChange={this.handleInput}
          />
          <input type="submit" value="Add" />
        </form>

        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
        ></ListItems>
      </div>
    );
  }
}

export default App;
