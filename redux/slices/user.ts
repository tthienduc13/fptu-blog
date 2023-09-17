import { createSlice } from "@reduxjs/toolkit";
export interface User {
  username: string;
  password: string;
  avatarUrl: string;
  role: string;
}

const initialState = {
  currentUser: {
    id: "",
    username: "",
    avatarUrl: "",
    role: "",
    createAt: "",
    updateAp: "",
  },
};
export const counterSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
      localStorage.setItem("access_token", action.payload?.access_token);
      localStorage.setItem("refresh_token", action.payload?.refresh_token);
    },
    logout: () => {
      localStorage.removeItem("currentUser");
    },
  },
});

export const { login, logout } = counterSlice.actions;

export default counterSlice.reducer;
