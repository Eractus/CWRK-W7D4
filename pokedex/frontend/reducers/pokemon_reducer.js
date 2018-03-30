import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_POKEMON:
      const newState = Object.assign({}, state);
      newState[action.singlepokemon.id] = action.singlepokemon;
      return newState;
    default:
      return state;
  }
};



export default pokemonReducer;
