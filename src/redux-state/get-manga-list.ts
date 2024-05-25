import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/redux-store';

// types.ts
export interface Result {
    id: string;
    title: string;
    altTitles: string[];
    headerForImage: {
        Referer: string;
    };
    image: string;
}

export interface MangaList {
    currentPage: number;
    hasNextPage: boolean;
    results: Result[];
}

const initialState: MangaList = {
  currentPage: 0,
  hasNextPage: true,
  results: []
};

const apiSlice = createSlice({
  name: 'mangaList',
  initialState,
  reducers: {
    setApiData: (state, action: PayloadAction<MangaList>) => {
      return action.payload;
    },
    updateResults: (state, action: PayloadAction<Result[]>) => {
      state.results = [...state.results, ...action.payload];
    },
    incrementPage: (state) => {
      state.currentPage += 1;
    },
    setHasNextPage: (state, action: PayloadAction<boolean>) => {
      state.hasNextPage = action.payload;
    },
    resetApiData: () => initialState,
  },
});

export const { setApiData, updateResults, incrementPage, setHasNextPage, resetApiData } = apiSlice.actions;

// Selectors
export const selectApiData = (state: RootState) => state.mangaList;
export const selectResults = (state: RootState) => state.mangaList.results;
export const selectCurrentPage = (state: RootState) => state.mangaList.currentPage;
export const selectHasNextPage = (state: RootState) => state.mangaList.hasNextPage;

export default apiSlice.reducer;
