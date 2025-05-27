import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    value: {
      categorySelected: "",
      itemIdSelected: "",
    },
  },
  reducers: {
    setCategorySelected: (state, { payload }) => {
      state.value.categorySelected = payload;
    },
    setIdSelected: (state, { payload }) => {
      state.value.itemIdSelected = payload;
    },
  },
});

export const { setCategorySelected, setIdSelected } = shopSlice.actions;
export default shopSlice.reducer;
