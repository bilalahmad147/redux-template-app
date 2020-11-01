import {createStore} from 'redux'
import cakeReducer from './reducer'

const store = createStore(cakeReducer)

export default store;