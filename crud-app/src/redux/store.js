import { configureStore } from "@reduxjs/toolkit";
import investorsReducer from './investorsSlice';

export default configureStore({
    reducer: {
        investors: investorsReducer
    }
});