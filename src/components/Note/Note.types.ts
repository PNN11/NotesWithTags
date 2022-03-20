import { Note } from "store/notes";

export interface NoteActions {
  onUpdate: (note: Note) => void;
  onDelete: (note: Note) => void;
  onEdit: (note: Note) => void;
}
export interface NoteProps extends NoteActions {
  note: Note;
}
