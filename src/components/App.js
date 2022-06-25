import React, { useState }  from 'react';
import { Route, Routes } from "react-router-dom";

import Input from './Input';
import Counter from './Counter';
import PokemonList from './PokemonList';

function App() {

  const [pokemon, setPokemon] = useState([
    {
      name: 'bulbasaur',
      found: true,
      id: 1
    },
    {
      name: 'ivysaur',
      found: true,
      id: 2
    },
    {
      name: 'venusaur',
      found: true,
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
          {/* <Input pokemon={pokemon} setPokemon={setPokemon} timeLimit={20}/> */}
          <PokemonList pokemon={pokemon}/>
        </>
      } />

      {/* Test */}
      <Route path="/counter" element={<Counter/>} />
    </Routes>
  </>
}

export default App;
