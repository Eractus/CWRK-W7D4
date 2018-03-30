import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from './reducers/entities_reducer';
import { fetchAllPokemon } from './util/api_util';
import { selectAllPokemon } from './reducers/selectors';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.requestAllPokemon = requestAllPokemon;
  // window.selectAllPokemon = selectAllPokemon;
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  // fetchAllPokemon().then( pokemon => console.log(pokemon) );
  ReactDOM.render(<Root store={store}/>, root);
});
