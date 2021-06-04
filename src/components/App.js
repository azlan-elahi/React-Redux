import Navbar from './Navbar';
import React from 'react';
// import ReactDOM from 'react-dom';
import Moviecard from './Moviecard';
import { data } from '../data';
import { addMovies, setShowFavourites } from '../actions';
class App extends React.Component {

  componentDidMount() {
    //api call
    //dispached actionx
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });
    // store.dispatch({
    //   type: 'ADD_MOVIES',
    //   movies: data
    // });
    store.dispatch(addMovies(data));
    console.log("STATE from APPS ", this.props.store.getState());
  }
  handleLikeCount = () => {
    console.log("Function called");

    // this.props.movie.count += 1;

  }
  isMovieFavourite = (movie) => {
    const { favourites } = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;

  }
  isMovieUnFavourite = (movie) => {
    const { favourites } = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if (index !== -1) {
      return false;
    }
    return true;

  }
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val))
  }

  render() {
    console.log("Render");
    const { list, favourites, showFavourites } = this.props.store.getState();
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div id="Main">
          <div id="tabs" style={{ display: 'flex', backgroundColor: 'lightcoral', justifyContent: 'right', gap: 200, flexDirection: 'row', padding: 10 }}>
            <div id="tab" onClick={() => this.onChangeTab(false)}>Movies</div>
            <div id="tab" onClick={() => this.onChangeTab(true)} style={{ cursor: "-moz-grab" }}>Favourites</div>
          </div>
          <div>
            {displayMovies.map((movie, index) => (
              < Moviecard movie={movie}
                key={`movies-${index}`}
                isFavourite={this.isMovieFavourite(movie)}
                isUnFavourite={this.isMovieUnFavourite(movie)}
                dispatch={this.props.store.dispatch}
                handleLikeCount={this.handleLikeCount}
                handleFavourites={this.handleFavourites}
              />
            ))}
          </div>
          {/* <Movies /> */}
          {displayMovies.length === 0 ? <div>No Movies To Display</div> : null}
        </div>
      </div>
    );
  }
}

export default App;
