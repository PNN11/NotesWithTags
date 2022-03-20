import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { notesApi } from "./notes";

const reducer = combineReducers({
  [notesApi.reducerPath]: notesApi.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(notesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
