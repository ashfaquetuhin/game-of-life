import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const tick = grid => {
  const size = grid.length;
  const newGrid = range(size).map(() => range(size));

  const get = (i, j) => {
    if (i < 0 || i >= size || j < 0 || j >= size) {
      return 0;
    } else {
      return grid[i][j];
    }
  }

  const neighbours = (i, j) => {
    return (
      get(i - 1, j - 1) +
      get(i - 1, j) +
      get(i - 1, j + 1) +

      get(i, j - 1) +
      get(i, j + 1) +

      get(i + 1, j - 1) +
      get(i + 1, j) +
      get(i + 1, j + 1)
    );
  }

  grid.forEach((row, i) => {
    row.forEach((cell, j) => {
      const n = neighbours(i, j);
      newGrid[i][j] = grid[i][j];
      if (grid[i][j] === 1) {
        if (n <= 1 || n >= 4) {
          newGrid[i][j] = 0;
        }
      } else {
        if (n === 3) {
          newGrid[i][j] = 1;
        }
      }
    })
  });
  
  return newGrid;
}

const range = n => Array(n).fill().map ((_, i) => i);

const Cell = ({state}) => (
  <div
   className="cell"
   style={{
    backgroundColor: state === 1 ? 'black' : 'white'
   }}
   />
);

const Row = ({row}) => (
  <div className="row">
  {row.map((state, j) => <Cell key={j} state={state} />)}
  </div>
  );
const Grid = ({grid}) => (
  <div className="grid">
  {grid.map((row, i) => <Row key ={i} row={row} />)}
  </div>
 );
class App extends Component {
  state = {
    grid: [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]

  }

  simulate() {
    this.setState({
      grid : tick (this.state.grid)
    });
  }

  componentDidMount () {
    setInterval(() => this.simulate(), 200);
  }
  render () {
    return <Grid grid={this.state.grid} />;
    }
  }



export default App;