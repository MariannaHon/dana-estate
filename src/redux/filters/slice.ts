
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const filtersInitialState = {
    street: '',
    price: '',
};

const filtersSlice = createSlice({
    name: "filters",
    initialState: filtersInitialState,
    reducers: {
        changeFilter(state, action) {
            state.street = action.payload;
        },
    },
});


export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;