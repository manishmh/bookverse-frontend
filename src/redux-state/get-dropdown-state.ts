import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/redux-store";

export interface dropdownStateType {
    navNotification: boolean;
    navUserProfile: boolean;
}

const initialState: dropdownStateType = {
    navNotification: false,
    navUserProfile: false,
}

const dropdownSlice = createSlice({
    name: 'dropdownState',
    initialState,
    reducers: {
        setNavNotificationState: (state, action: PayloadAction<boolean>) => {
            state.navNotification = action.payload;
            state.navUserProfile = !action.payload; 
        },
        setNavUserProfileState: (state, action: PayloadAction<boolean>) => {
            state.navUserProfile = action.payload;
            state.navNotification = !action.payload; 
        },
        resetDropdownState: (state) => {
            state.navNotification = false;
            state.navUserProfile = false;
        }
    }
})

export const { setNavNotificationState, setNavUserProfileState, resetDropdownState } = dropdownSlice.actions;

export const selectDropdownState = (state: RootState) => state.dropdownState;

export default dropdownSlice.reducer;

