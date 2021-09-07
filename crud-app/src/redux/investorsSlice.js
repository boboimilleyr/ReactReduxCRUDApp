import { createSlice } from '@reduxjs/toolkit';

export const investorsSlice = createSlice({
    name: "investors",
    initialState: [
        {id: 1, name: "Jane Doe", location: "USA", edit: false},
        {id: 2, name: "Juan Dela Cruz", location: "Philippines", edit: false},
        {id: 3, name: "John Doe", location: "Canada", edit: false},
    ],
    reducers: {
        addInvestor: ( state, action) => {
            const newInvestor = {
                id: state.length ? (state[state.length-1].id + 1) : 1,
                name: action.payload.name,
                location: action.payload.location,
                edit: false
            }
            state.push(newInvestor);
        },
        editInvestor: (state, action) => {
            const index = state.findIndex((investor) => investor.id === action.payload.id);
            state[index].edit = true;
        },
        updateInvestor: (state, action) => {
            const index = state.findIndex((investor) => investor.id === action.payload.id);
            const {name, location, edit} = action.payload;
            state[index].name = name;
            state[index].location = location;
            state[index].edit = !edit;
        },
        deleteInvestor: (state, action) => {
            return state.filter((investor) => investor.id !== action.payload.id);
        }
    }
});

export const { addInvestor, editInvestor, updateInvestor, deleteInvestor } = investorsSlice.actions;

export default investorsSlice.reducer;