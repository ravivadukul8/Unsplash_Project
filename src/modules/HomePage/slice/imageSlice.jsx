import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allImages: [],
  pageNo: 1,
  total: 0,
  total_pages: 0,
  isImage: true,
  searchValue: "all",
};

const Api_Url = "https://api.unsplash.com/search/photos";

export const getImages = createAsyncThunk(
  `Images/getImages`,
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `${Api_Url}?page=${payload?.pageNo}&query=${payload?.searchValue}&per_page=30&client_id=A65M-Rskl_vZQLB-80ixkNlSBkdQvbaet1rfWmTUq9I`
      );
      return response.data;
    } catch (err) {
      console.error(err);
      return thunkAPI.rejectWithValue(
        err?.response?.data?.non_field_errors?.at(0)
      );
    }
  }
);

export const imageSlice = createSlice({
  name: "Images",
  initialState,
  reducers: {
    changePageNo(state, action) {
      state.pageNo = action.payload;
    },
    changeSearchValue(state, action) {
      state.searchValue = action.payload ? action.payload : "all";
      state.pageNo = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getImages.pending, (state) => {
      state.isImage = true;
    });
    builder.addCase(getImages.fulfilled, (state, action) => {
      state.isImage = false;
      state.allImages =
        current(state).pageNo > 1
          ? [...current(state).allImages, ...action.payload.results]
          : action.payload.results;
      state.total = action.payload.total;
      state.total_pages = action.payload.total_pages;
    });
    builder.addCase(getImages.rejected, (state, { payload }) => {
      state.isImage = false;
      console.error("Rejected with payload:", payload);
    });
  },
});

export default imageSlice.reducer;
export const { changePageNo, changeSearchValue } = imageSlice.actions;
