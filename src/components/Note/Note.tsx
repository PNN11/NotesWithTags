import React, { SyntheticEvent } from "react";

import Button from "../Button";
import { NoteProps } from "./Note.types";
import "./Note.styles.scss";

const Note: React.FC<NoteProps> = ({ note, onDelete, onUpdate, onEdit }) => {
  const { text, tags } = note;

  const handleDelete = () => {
    onDelete(note);
  };

  const handleEdit = () => {
    onEdit(note);
  };

  const handleDeleteTag = (e: SyntheticEvent<HTMLButtonElement>) => {
    const newTags = tags.filter((tag) => tag !== e.currentTarget.value);
    onUpdate({ ...note, tags: newTags });
  };

  return (
    <li className="note">
      <div className="note-content">
        <p className="note-text">
          {text.split(" ").map((word, index) =>
            word[0] === "#" ? (
              <span key={index} className="note-text-tag">
                {word}{" "}
              </span>
            ) : (
              <span key={index}>{word} </span>
            )
          )}
        </p>
        <p className="note-tags">
          Tags:{" "}
          {tags?.map((tag, index) => (
            <button
              value={tag}
              onClick={handleDeleteTag}
              key={index}
              className="note-tag"
            >
              {tag}{" "}
            </button>
          ))}
        </p>
      </div>
      <div className="note-actions">
        <Button onClick={handleEdit} type="button">
          Edit
        </Button>
        <Button onClick={handleDelete} type="button">
          Delete
        </Button>
      </div>
    </li>
  );
};

export default Note;
