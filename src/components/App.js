import React, { useState }  from 'react';
import { Route, Routes } from "react-router-dom";

import Input from './Input';
import PokemonList from './PokemonList';

function App() {

  const [pokemon, setPokemon] = useState([
    {
      name: 'bulbasaur',
      found: false,
      id: 1
    },
    {
      name: 'ivysaur',
      found: false,
      id: 2
    },
    {
      name: 'venusaur',
      found: false,
      id: 3
    },
    {
      name: 'charmander',
      found: false,
      id: 4
    },
    {
      name: 'charmeleon',
      found: false,
      id: 5
    },
    {
      name: 'charizard',
      found: false,
      id: 6
    },
    {
      name: 'squirtle',
      found: false,
      id: 7
    },
    {
      name: 'wartortle',
      found: false,
      id: 8
    },
    {
      name: 'blastoise',
      found: false,
      id: 9
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
