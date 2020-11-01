import { applyMiddleware, createAsyncThunk } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import reducer from './reducer';


const store = createStore(reducer,applyMiddleware(createAsyncThunk));

export default store;