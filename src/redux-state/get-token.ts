import { RootState } from "@/store/redux-store";
import { createSlice } from "@reduxjs/toolkit";

export interface tokenType {
    accessToken: string;
    refreshToken: string;
}

const initialValue: tokenType = {
    accessToken: "",
    refreshToken: "",
}

const tokenSlice = createSlice({
    name: 'token',
    initialState: initialValue,
    reducers: {
        setToken: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        resetToken: (state) => {
            state.accessToken = "";
            state.refreshToken = "";
        }
    }
})

export const { setToken, resetToken } = tokenSlice.actions;

export const selectAccessToken = (state: RootState ) => state.token.accessToken;
export const selectRefreshToken = (state: RootState ) => state.token.refreshToken;

export default tokenSlice.reducer;