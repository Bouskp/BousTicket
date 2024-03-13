import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.user = action.user
      state.isLoggedIn = true
    },

    logout(state, action) {
      state.user = null
      state.isLoggedIn = false
    },
    update(state, action) {
      state.user = action.payload
    },
  },
})
export const { login, update, logout } = userSlice.actions
export default userSlice.reducer
