import React, { Component } from 'react';
import './App.css';
import Add from './components/Add';
import Remove from './components/Remove';
import Clear from './components/Clear';
import List from './components/List';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countTodos: 0
    };
  }

  onAdd = () => {
    this.setState(prevState => ({
      countTodos: prevState.countTodos + 1
    }));
  };

  onRemove = () => {
    if (this.state.countTodos > 0) {
      this.setState(prevState => ({
        countTodos: prevState.countTodos - 1
      }));
    }
  };

  onClear = () => {
    this.setState({
      countTodos: 0
    });
  };

  render() {
    const { countTodos } = this.state;
    return (
      <div className="App">
        <h1>TODOS</h1>
        <Add onAdd={this.onAdd} />
        <Remove onRemove={this.onRemove} countTodos={countTodos} />
        <Clear onClear={this.onClear} countTodos={countTodos} />
        <List countTodos={countTodos} />
      </div>
    );
  }
}

export default App;
