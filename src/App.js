import React,{useState} from 'react';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from './components/redux/action'


function App() {

  const [number, setNumber] = useState(1)
  const numOfCakes = useSelector(state => state.numOfCakes)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <h1>Number of Cakes - {numOfCakes}</h1>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => dispatch(buyCake(number))}>BUY CAKE</button>
    </div>
  );
}

export default App;
