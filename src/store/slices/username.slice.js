import { createSlice } from '@reduxjs/toolkit';

export const usernameSlice = createSlice({
		name: 'username',
    initialState: null,
    reducers: {
        setNewValue : (state, action) =>{
          return action.payload
        }
    }
})

export const { setNewValue } = usernameSlice.actions;

export default usernameSlice.reducer;