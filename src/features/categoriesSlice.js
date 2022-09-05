import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: 0
};

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        updateCategoriesSearch: (state, action) => {
            state.categories = action.payload
        }
    }
});

export const { updateCategoriesSearch } = categoriesSlice.actions

export default categoriesSlice.reducer;