import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function App() {

  const state = useSelector(state => state.numOfCakes)
  console.log(state)
  const dispatch = useDispatch();


  return (
    <div>
      <h1>Number of Cakes = {state}</h1>
      <button onClick={()=>{dispatch(
        {
          type: 'INCREMENT'
        }
      )}}>new Cake</button>
      <button onClick={()=>{dispatch(
        {
          type: 'DECREMENT'
        }
      )}}>buy Cake</button>
    </div>
  );
}

export default App;
