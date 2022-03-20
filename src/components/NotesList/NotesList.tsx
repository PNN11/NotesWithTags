import React from "react";

import Note from "components/Note/Note";
import { NotesListProps } from "./NotesList.types";
import "./NotesList.styles.scss";

const NotesList: React.FC<NotesListProps> = ({
  notes,
  onDelete,
  onUpdate,
  onEdit,
}) => {
  const noteItems = notes.map((note) => (
    <Note
      onDelete={onDelete}
      onUpdate={onUpdate}
      onEdit={onEdit}
      key={note.id}
      note={note}
    />
  ));
  return (
    <ul className="notes-list">
      {notes.length ? noteItems : <h2>No notes</h2>}
    </ul>
  );
};

export default NotesList;
