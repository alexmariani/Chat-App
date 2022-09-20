import { createSlice } from '@reduxjs/toolkit'

export const userSlice=createSlice({
    name:'user',
    initialState:{
        value:{username:'',password:''}
    },
    reducers:{
        login:(state,action)=>{
            state.value=action.payload;
        },
        logout:(state)=>{
            state.value={username:'',password:''};
        }
    }
});

export const {login,logout}=userSlice.actions;

export const selectUser=state => state.user.value;

export default userSlice.reducer;

