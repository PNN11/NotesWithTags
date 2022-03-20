import React, { useState } from "react";

import Header from "components/Header";
import CreateForm from "components/CreateForm";
import FilterNotes from "components/FilterNotes";
import NotesList from "components/NotesList";
import { Note, notesApi } from "store/notes";
import { FilterValues } from "components/FilterNotes/FilterNotes.types";
import "./NotesContainer.styles.scss";

const NotesContainer: React.FC = () => {
  const {
    data: notes = [],
    isLoading,
    isError,
  } = notesApi.useGetAllNotesQuery("");
  const [editNote, setEditNote] = useState<Note | null>(null);
  const [filterValues, setFilterValues] = useState<FilterValues>({
    tags: "",
  });

  const [createNote] = notesApi.useCreateNoteMutation();
  const [deleteNote] = notesApi.useDeleteNoteMutation();
  const [updateNote] = notesApi.useUpdateNoteMutation();

  const handleChangeFilterValue = (name: string, value: string) => {
    setFilterValues({ ...filterValues, [name]: value });
  };

  const handleSubmit = (note: Note) => {
    if (editNote) {
      updateNote(note);
      setEditNote(null);
    }
    createNote(note);
  };
  const handleUpdateNote = (note: Note) => {
    updateNote(note);
  };
  const handleDeleteNote = (note: Note) => {
    deleteNote(note);
  };

  const handleEditNote = (note: Note) => {
    setEditNote(note);
  };

  const filterNotes = () => {
    let filteredNotes = notes;
    if (filterValues.tags) {
      return filteredNotes.filter((note) =>
        note.tags
          .join(" ")
          .toUpperCase()
          .includes(filterValues.tags.toUpperCase())
      );
    }
    return filteredNotes;
  };

  const filteredNotes = filterNotes();

  return (
    <div className="container">
      <Header count={filteredNotes.length} />
      <CreateForm
        initial={editNote}
        onEdit={handleUpdateNote}
        onSubmit={handleSubmit}
      />
      <FilterNotes
        filterValues={filterValues}
        onChangeFilterValues={handleChangeFilterValue}
      />
      {isLoading && "Loading..."}
      {isError && "Error..."}
      {!isLoading && !isError && notes && (
        <NotesList
          onUpdate={handleUpdateNote}
          onDelete={handleDeleteNote}
          onEdit={handleEditNote}
          notes={filteredNotes}
        />
      )}
    </div>
  );
};

export default NotesContainer;
