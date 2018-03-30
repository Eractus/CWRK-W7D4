import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

export default class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemon = this.props.pokemon;
    // debugger;
    if (pokemon.length === 0) return <div>No Pokemon</div>;
    return (
      <div>
        <ul>
          { pokemon.map(poke => {
            return (
              <PokemonIndexItem key={poke.id} pokemon={poke} />
            );
          }) }
        </ul>
      </div>
    );
  }
}
