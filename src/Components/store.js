import { createStore } from 'redux';
import CounterReducer from './ReducerStore'

const store = createStore(CounterReducer);

export default store;