import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedOption : '',
}

const optionSlice = createSlice({
    name: 'option',
    initialState,
    reducers: {
        setSelectedOption: (state,action) => {
            state.selectedOption = action.payload;
        }
    }
})


export const {setSelectedOption} = optionSlice.actions;
export default optionSlice.reducer;