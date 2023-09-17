import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenSideBar: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleIsOpenSideBar: (state) => {
      state.isOpenSideBar = !state.isOpenSideBar;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleIsOpenSideBar } = appSlice.actions;

export default appSlice.reducer;
