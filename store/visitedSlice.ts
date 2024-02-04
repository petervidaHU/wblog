import { VisitedSite } from '@/types/reduxTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SitesStateType = Array<VisitedSite>;

const initialState: SitesStateType = [];

const visitedSlice = createSlice({
  name: 'visited',
  initialState,
  reducers: {
    addVisitedSite: (state, action: PayloadAction<VisitedSite>) => {
      const { url } = action.payload;

      if (!state.some((visitedSite) => visitedSite.url === url)) {
        state.push(action.payload);

        if (state.length > 10) {
          state.shift();
        }
      }
    },
  }
});

export const { addVisitedSite } = visitedSlice.actions;

export default visitedSlice.reducer;