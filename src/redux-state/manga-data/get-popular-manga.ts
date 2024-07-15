import { MANGA, ISearch, IMangaResult } from '@consumet/extensions';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const mangadex = new MANGA.MangaDex();

interface MangaState {
  data: ISearch<IMangaResult> | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: MangaState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchPopularManga = createAsyncThunk(
  'manga/fetchPopularManga',
  async () => {
    const response = await mangadex.fetchPopular();
    return response;
  }
);

const popularMangaSlice = createSlice({
  name: 'popularManga',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularManga.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPopularManga.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPopularManga.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default popularMangaSlice.reducer;
