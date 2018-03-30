import React from 'react';
import { Link } from 'react-router-dom';

export default class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const poke = this.props.pokemon;
    return (
      <li>
        <Link to={`/pokemon/${poke.id}`}>
          <p>{poke.name}</p>
          <img src={poke.image_url} />
        </Link>
      </li>
    );
  }
}
