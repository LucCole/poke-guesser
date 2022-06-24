import React, { useState }  from 'react';
import { Route, Routes } from "react-router-dom";

import Input from './Input';
import PokemonList from './PokemonList';

function App() {

  const [pokemon, setPokemon] = useState([
    {
      name: 'bulbasaur',
      found: false
    },
    {
      name: 'ivysaur',
      found: false
    },
    {
      name: 'venusaur',
      found: false
    },
    {
      name: 'charmander',
      found: false
    },
    {
      name: 'charmeleon',
      found: false
    },
    {
      name: 'charizard',
      found: false
    },
    {
      name: 'squirtle',
      found: false
    },
    {
      name: 'wartortle',
      found: false
    },
    {
      name: 'blastoise',
      found: false
    },
  ]);
  
  return <>
    <Routes>
      <Route path="/" element={
        <>
          <Input pokemon={pokemon} setPokemon={setPokemon}/>
          <PokemonList pokemon={pokemon}/>
        </>
      } />
    </Routes>
  </>
}

export default App;
