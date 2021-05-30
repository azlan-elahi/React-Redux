import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import movies from './reducers';


//creating store
//and they need arguments as reducer
// const store = createStore(movies);
const store = createStore(movies);
// console.log("STORE ", store);
// //getState()
// console.log("BEFORE STATE ", store.getState());
// //store.dispatch which is used to send action to reducer

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ title: 'Super Man' }]
// })

// console.log("AFTER STATE ", store.getState());
// //Subscribing to store


ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

