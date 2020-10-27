import React, { useState } from 'react';


function App({count}) {

  let initialState = 0
  let [State, setState] = useState(initialState)

  return (
    <div>
      <h1>Counter  : {State}</h1>
      <button onClick={()=>{setState(++State)}}>Plus</button>
      <button onClick={()=>{setState(--State)}}>Minus</button>
    </div>
  );
}

export default App;
