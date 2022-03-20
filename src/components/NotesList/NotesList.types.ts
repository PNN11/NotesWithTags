import { Note } from "store/notes";
import { NoteActions } from "../Note/Note.types";

export interface NotesListProps extends NoteActions {
  notes: Note[];
}
