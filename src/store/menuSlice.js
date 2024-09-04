import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isMenu: true,
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers:{
        toggleMenu: (state,action) => {
            state.isMenu = !state.isMenu;
        },
        setMenu: (state,action) => {
            state.isMenu = action.payload;
        }
    }
});

export const {toggleMenu,setMenu} = menuSlice.actions


export default menuSlice.reducer;