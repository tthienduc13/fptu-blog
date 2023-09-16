import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenSideBar: false,
  isMouseVisit: false,
  isDarkMode: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleIsOpenSideBar: (state) => {
      state.isOpenSideBar = !state.isOpenSideBar;
    },
    changeIsMouseVisit: (state, action) => {
      state.isMouseVisit = action.payload;
    },
    toggleIsDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleIsOpenSideBar, changeIsMouseVisit, toggleIsDarkMode } =
  appSlice.actions;

export default appSlice.reducer;
