import * as actionTypes from './types';

export const getStock = stock => {
    return{
        type: actionTypes.GET_STOCK,
        payload: stock
    }
}