import React, {Component} from 'react';
import './App.css';
import CardList from './cards/cardList';

class App extends Component {
  render() {
  return (
    <div className="App">
      <CardList/> 
    </div>
  );
}
}
export default App;
