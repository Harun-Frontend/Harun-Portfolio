import { createSlice } from "@reduxjs/toolkit";

const singleProjectSlice = createSlice({
  name: "singleProject",
  initialState: {
    project: null,
  },

  reducers: {
    setSingleProject: (state, action) => {
      state.project = action.payload;
    },
  },
});

export const { setSingleProject } = singleProjectSlice.actions;
export default singleProjectSlice.reducer;