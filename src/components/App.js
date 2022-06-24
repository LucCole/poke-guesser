import React from 'react';
import { Route, Routes } from "react-router-dom";

import Test from './Test';

function App() {
  
  return <>
    <Routes>
      <Route path="/" element={
        <Test text="helooooo"></Test>
      } />
    </Routes>
  </>
}

export default App;
