import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const range = n => Array(n).fill().map ((_, i) => i);

const Cell = () => <div className="cell"> </div>;

const Row = ({size}) => (
  <div className="row">
  {range(size).map(j => <Cell key={j} />)}
  </div>
  );
const Grid = ({size}) => (
  <div className="grid">
  {range (size).map(i => <Row key ={i} size={20} />)}
  </div>

  )
class App extends Component {
  render () {
    return <Grid size={20} />;
    }
  }

export default App;
