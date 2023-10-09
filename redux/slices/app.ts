import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenSideBar: false,
  isLoadingAdmin: true,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleIsOpenSideBar: (state) => {
      state.isOpenSideBar = !state.isOpenSideBar;
    },
    changeIsLoadingAdmin: (state) => {
      state.isLoadingAdmin = !state.isLoadingAdmin;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleIsOpenSideBar, changeIsLoadingAdmin } = appSlice.actions;

export default appSlice.reducer;
