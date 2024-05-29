import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/redux-store";

export interface searchInputType {
    value: string;
}

const initialState: searchInputType = {
    value: ""
}

const searchInputSlice = createSlice({
    name: 'searchInput',
    initialState,
    reducers: {
        setSearchInput: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
        resetSearchInput: (state) => {
            state.value = "";
        }
    }
})

export const { setSearchInput, resetSearchInput } = searchInputSlice.actions;

export const selectSearchInput = (state: RootState) => state.searchInput.value; 

export default searchInputSlice.reducer;