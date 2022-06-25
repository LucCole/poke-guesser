import React, { useState }  from 'react';
import { Route, Routes } from "react-router-dom";

import Input from './Input';
import Counter from './Counter';
import PokemonList from './PokemonList';

import gen1 from '../data/gen-1';

function App() {

  const [gen1Pokemon, setGen1Pokemon] = useState([...gen1]);
  
  return <>
    <Routes>
      <Route path="/gen1" element={
        <>
          <Input pokemon={gen1Pokemon} setPokemon={setGen1Pokemon} timeLimit={20}/>
          <PokemonList pokemon={gen1Pokemon}/>
        </>
      } />

      {/* Test */}
      <Route path="/counter" element={<Counter/>} />
    </Routes>
  </>
}

export default App;
