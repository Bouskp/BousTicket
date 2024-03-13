import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modalSlice.js'
import userReducer from './userSlice.js'
import eventReducer from './eventSlice.js'
export const store = configureStore({
  reducer: {
    user: userReducer,
    events: eventReducer,
  },
})
