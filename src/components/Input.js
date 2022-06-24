import React, { useState } from "react";


const Input = ({pokemon, setPokemon}) => {

  const [text, setText] = useState('');
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);

  const guessCheck = (guess) => {

    const pokemonIndex = pokemon.findIndex((mon) => mon.name === guess);

    // console.log('pokemonIndex', pokemonIndex);
    // console.log('guess', guess);


    if(pokemonIndex >= 0){
      const updatedPokemon = [...pokemon]
      updatedPokemon[pokemonIndex].found = true;
      console.log('We got it!');
      setPokemon(updatedPokemon);
      setCorrectGuesses(correctGuesses + 1);
    }else{
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  }

  return <>
    <input
      type="text"
      placeholder="Pokemon Name"
      value={text}
      onChange={(event) => setText(event.target.value)}
    ></input>
    <button onClick={() => guessCheck(text)}>Guess</button>
    <span>
      <span className="correctGuesses">{correctGuesses}</span>
      /
      <span className="incorrectGuesses">{incorrectGuesses}</span>
    </span>
  </>
}

export default Input;
