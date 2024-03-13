import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  events: [],
}

const eventsSlice = createSlice({
  name: 'events',
  initialState: initialState,
  reducers: {
    add(state, action) {
      state.events = state.events.push(action.payload)
    },
  },
})
export const { add } = eventsSlice.actions
export default eventsSlice.reducer
