import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    player: {}
};

export const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        updatePlayerDetails: (state, action) => {
            state.player = action.payload
        },
        logOutPlayer: (state) => {
            state.player = {}
        }
    }
});

export const { updatePlayerDetails, logOutPlayer } = playerSlice.actions

export default playerSlice.reducer;