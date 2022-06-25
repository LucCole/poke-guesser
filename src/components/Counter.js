import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const handleClick = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }

    const newIntervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    setIntervalId(newIntervalId);
  };


  useEffect(() => {
    console.log(`count: ${count}`);
    if(count >= 5){
      clearInterval(intervalId);
      setIntervalId(0);
    }
  }, [count]);


  return (
    <div>
      <h1>The component has been rendered for {count} seconds</h1>
      <button onClick={handleClick}>
        {intervalId ? "Stop counting" : "Start counting"}
      </button>
    </div>
  );
};

export default Counter;
