import { createStore } from 'redux';
import rootReducer from '../Reducer';

const initialStockState = {
    stock:{}
}

const store = createStore(rootReducer, [initialStockState]);
console.log(store.getState())

export default store;