import { configureStore } from '@reduxjs/toolkit';
import optionReducer from './optionSlice';
import menuReducer from './menuSlice';


const store = configureStore({
    reducer: {
        option: optionReducer,
        menu: menuReducer,
    }
})

export default store;