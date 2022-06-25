import React, { useState, useEffect } from "react";

const Input = ({pokemon, setPokemon, timeLimit}) => {

  const [timesUp, setTimesUp] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [count, setCount] = useState(timeLimit);
  const [intervalId, setIntervalId] = useState(0);
  const [text, setText] = useState('');
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);

  const handleClick = () => {
    const newIntervalId = setInterval(() => {
      setCount(prevCount => prevCount - 1);
      setIsDisabled(false)
    }, 1000);
    setIntervalId(newIntervalId);
  };

  useEffect(() => {
    console.log(`count: ${count}`);
    if(count <= 0){
      clearInterval(intervalId);
      setIntervalId(0);
      setTimesUp('Times up!!');
      setIsDisabled(true)
    }
  }, [count]);

  const guessCheck = (guess) => {

    const pokemonIndex = pokemon.findIndex((mon) => mon.name === guess);

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
      disabled={isDisabled}
    ></input>
    <button onClick={() => guessCheck(text)} disabled={isDisabled}>Guess</button>
    <span>
      <span className="correctGuesses">{correctGuesses}</span>
      /
      <span className="incorrectGuesses">{incorrectGuesses}</span>
    </span>
    <div>
      <h1>{count} seconds left</h1>
      <button onClick={handleClick}>
        {intervalId ? "Stop counting" : "Start counting"}
      </button>
    </div>
    <span>{timesUp}</span>
  </>
}

export default Input;
