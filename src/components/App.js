import Navbar from './Navbar';
import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './Movies';
import { data } from '../data';

class App extends React.Component {

  // like() {
  //   console.log('ii');

  // }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div id="Main">
          <div id="tabs">
            <div id="tab">Movies</div>
            <div id="tab">Favourites</div>
          </div>
          <Movies />
        </div>
      </div>
    );
  }
}

export default App;
