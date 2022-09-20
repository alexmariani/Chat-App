import { configureStore } from '@reduxjs/toolkit'
import roomReducer from './slice/RoomSlice'
import userReducer from './slice/UserSlice'

export default configureStore({
	reducer: {
		rooms: roomReducer,
		user: userReducer
	}
});
