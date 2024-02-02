import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SitesStateType = string[];

const initialState: SitesStateType = [];

const footerSlice = createSlice({
  name: 'footer',
  initialState,
  reducers: {
    addSite: (state, action: PayloadAction<string>) => [...state, action.payload]
  }
});

export const { addSite } = footerSlice.actions;

export default footerSlice.reducer;