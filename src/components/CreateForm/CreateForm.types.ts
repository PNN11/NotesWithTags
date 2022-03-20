import { Note } from "store/notes";

export interface CreateFormProps {
  onSubmit: (note: Note) => void;
  onEdit: (note: Note) => void;
  initial?: Note | null;
}
