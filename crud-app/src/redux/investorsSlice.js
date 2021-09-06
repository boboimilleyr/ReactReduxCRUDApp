import { createSlice } from "@reduxjs/toolkit";

export const investorsSlice = createSlice({
    name: "investors",
    initialState: [
        {id: 1, name: "a", location: "a"},
        {id: 2, name: "b", location: "b"},
        {id: 3, name: "c", location: "c"},
    ],
    reducers: {
        addInvestor: ( state, action) => {
            const newInvestor = {
                id: state.length + 1,
                name: action.payload.name,
                location: action.payload.location
            }
            state.push(newInvestor);
        },
    }
});

export const { addInvestor } = investorsSlice.actions;

export default investorsSlice.reducer;