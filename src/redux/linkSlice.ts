import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const linkSlice = createSlice({
	name: 'links',
	initialState: [],
	reducers: [(addLinks = (state, action) => {})],
	extraReducers: builder => {},
});

export const { addLinks } = linkSlice.actions;
export default linkSlice.reducer;
