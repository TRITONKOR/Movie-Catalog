import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (
            state,
            action: PayloadAction<{ name: string; email: string }>
        ) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.name = '';
            state.email = '';
            state.isAuthenticated = false;
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
