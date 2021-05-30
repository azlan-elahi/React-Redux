import Navbar from './Navbar';
import React from 'react';
// import ReactDOM from 'react-dom';
import Moviecard from './Moviecard';
import { data } from '../data';

class App extends React.Component {

  componentDidMount() {
    //api call
    //dispached action
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });
    store.dispatch({
      type: 'ADD_MOVIES',
      movies: data
    });
    console.log("STATE from APPS ", this.props.store.getState());
  }
  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div id="Main">
          <div id="tabs">
            <div id="tab">Movies</div>
            <div id="tab">Favourites</div>
          </div>
          <div>
            {movies.map((movie, index) => (
              < Moviecard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
          {/* <Movies /> */}
        </div>
      </div>
    );
  }
}
export default App;
