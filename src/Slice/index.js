import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getTodosAsync = createAsyncThunk(
    'todos/getAsyncThunk',
    async () => {
        const resp = await fetch('https://fakestoreapi.com/products');
        if(resp && resp.ok){
            const stocks = await resp.json();
            return { stocks };
        }
    }
);

export const stockSlice = createSlice({
    name: 'stocks',
    initialState: [
        {
        id: 0,
        title:'',
        price:0,
        description:'',
        category:'',
        image:'' },
    ],
    reducers: {},

    extraReducers: {
        [getTodosAsync.fulfilled]: (state, action) => {
            return action.payload.stocks;
        }
    }
});

export const {} = stockSlice.actions;
export default stockSlice.reducer;