import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake, buyIceCream } from './components/store/action';


function App() {

  const state = useSelector(state => state)
  console.log(state)
  const dispatch = useDispatch();


  return (
    <div>
      <h1>Number of Cakes = {state.numOfCakes}</h1>
      <h1>Number of icreCream = {state.numOfIceCream}</h1>
      <button onClick={()=>{dispatch(buyCake())}}>buy Cake</button>
      <button onClick={()=>{dispatch(buyIceCream())}}>buy icreCream</button>
    </div>
  );
}

export default App;
