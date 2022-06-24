import React from "react";

const Pokemon = ({name, guessed}) => {
  return <div className={guessed ? 'guessed' : 'notGuessed'}>
    {name}
  </div>
}

export default Pokemon;
