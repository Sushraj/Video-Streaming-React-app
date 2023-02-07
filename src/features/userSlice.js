import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    //two (i.e login,logout) action we have created  for pushing code into user slice
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

//selector : get piece of information from user store we create selector
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
