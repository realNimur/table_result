import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestLoadData } from "../api/api";

export const thunkLoadData = createAsyncThunk(
  "data/load",
  async (arg, thunkAPI) => {
    const response = await requestLoadData();
    thunkAPI.dispatch(setData(response));
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    isError: false,
    isFetching: false,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    clearData: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkLoadData.pending, (state) => {
      state.isError = false;
      state.isFetching = true;
    });
    builder.addCase(thunkLoadData.rejected, (state) => {
      state.isError = true;
      state.isFetching = false;
    });
    builder.addCase(thunkLoadData.fulfilled, (state) => {
      state.isFetching = false;
    });
  },
});

export const { setData, clearData } = dataSlice.actions;

export default dataSlice.reducer;
