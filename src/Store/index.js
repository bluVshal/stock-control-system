import { configureStore } from '@reduxjs/toolkit';

import stockReducer from '../slice';

export default configureStore ({
    reducer: {
        stocks: stockReducer
    }
});