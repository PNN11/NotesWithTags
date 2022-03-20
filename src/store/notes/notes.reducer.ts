import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Note } from "./notes.types";

export const notesApi = createApi({
  reducerPath: "note",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Note"],
  endpoints: (build) => ({
    getAllNotes: build.query<Note[], unknown>({
      query: () => ({
        url: "/notes",
      }),
      providesTags: () => ["Note"],
    }),
    createNote: build.mutation<Note, Note>({
      query: (note) => ({
        url: "/notes",
        method: "POST",
        body: note,
      }),
      invalidatesTags: ["Note"],
    }),
    updateNote: build.mutation<Note, Note>({
      query: (note) => ({
        url: `/notes/${note.id}`,
        method: "PUT",
        body: note,
      }),
      invalidatesTags: ["Note"],
    }),
    deleteNote: build.mutation<Note, Note>({
      query: (note) => ({
        url: `/notes/${note.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Note"],
    }),
  }),
});
