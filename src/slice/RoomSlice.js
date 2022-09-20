import { createSlice } from '@reduxjs/toolkit'

export const roomSlice = createSlice({
	name: 'rooms',
	initialState: {
		// @ts-ignore
		value: []
	},
	reducers: {
		addRoom:(state,action)=>{
            // @ts-ignore
            state.value.push(action.payload);
        },
        removeRoom:(state,action)=>{
            state.value.filter(el => el!==action.payload);
        }
	}
});


export const { addRoom,removeRoom} = roomSlice.actions;

export const selectRooms = state => state.rooms.value;

export default roomSlice.reducer;
