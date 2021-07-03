import { combineReducers } from 'redux';
import * as actionTypes from '../Actions/types';

const initialStockState = {
    stock:{}
}

const getStock_reducer = (state=initialStockState, action) => {
    switch(action.type){
        case actionTypes.GET_STOCK:
            return{
                stock: action.payload.stock
            }
        default:
            return state
    }
};

const rootReducer = combineReducers({
    stock: getStock_reducer
});

export default rootReducer;