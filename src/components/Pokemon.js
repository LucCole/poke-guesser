import React from "react";

const Pokemon = ({name, guessed, id}) => {
  return <div className={`${guessed ? 'guessed' : 'notGuessed'} pokemon`}>
    <div>{id}</div>
    <span>{name}</span>
  </div>
}

export default Pokemon;
