import { configureStore } from '@reduxjs/toolkit'
import mangaListReducer from '@/redux-state/get-manga-list'
import dropDownStateReducer from '@/redux-state/get-dropdown-state'
import searchInputReducer from '@/redux-state/get-search-input'

export const store = configureStore({
  reducer: {
    mangaList: mangaListReducer,
    dropdownState: dropDownStateReducer,
    searchInput: searchInputReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch