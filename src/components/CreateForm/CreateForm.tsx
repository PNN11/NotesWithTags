import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";

import Button from "components/Button";
import Input from "components/Input";
import "./CreateForm.styles.scss";
import { CreateFormProps } from "./CreateForm.types";
import { Note } from "store/notes";

const CreateForm: React.FC<CreateFormProps> = ({
  onSubmit,
  onEdit,
  initial,
}) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    initial && setText(initial?.text);
  }, [initial]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!text) {
      alert("Please enter a text");
    } else {
      const noteBody: Omit<Note, "id"> = { text: text, tags: [] };
      text
        .split(" ")
        .forEach(
          (word) =>
            word[0] === "#" &&
            !noteBody.tags.includes(word) &&
            noteBody.tags.push(word)
        );
      initial
        ? onSubmit({ ...noteBody, id: initial.id })
        : onSubmit(noteBody as Note);
      setText("");
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="create-form">
        <Input
          type="text"
          label={initial ? "Edit note" : "Create a new note"}
          id="create"
          name="create"
          value={text}
          onChange={handleChange}
          placeholder="New note"
        />
        <Button type="submit">{initial ? "Edit" : "Create"}</Button>
      </form>
    </section>
  );
};

export default CreateForm;
