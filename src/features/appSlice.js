import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roomId: null,
  },
  reducers: {
    enterServer: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterServer } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;