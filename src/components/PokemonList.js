import React from "react";

import Pokemon from './Pokemon';


const PokemonList = ({pokemon}) => {
  return <div className="pokemonList">
    {pokemon.map((mon) => {
      return <Pokemon key={`pokemon-${mon.id}`} name={mon.name} guessed={mon.found} id={mon.id}/>
    })}
  </div>
}

export default PokemonList;
