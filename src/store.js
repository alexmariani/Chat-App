import { configureStore } from '@reduxjs/toolkit'
import roomReducer from './slice/RoomSlice'
export default configureStore({
	reducer: {
		rooms: roomReducer
	}
});
