import React, { useState } from "react";
import ListNotes from "./ListNotes";
import moment from "moment";

const CreateNote = () => {
  const [listNotes, setListNotes] = useState([]);

  const noteState = {
    id: 0,
    title: "",
    description: "",
    time: "",
    date: moment(new Date()).format("YYYY-MM-DD"),
    createdAt: new Date(),
  };

  const [note, setNote] = useState(noteState);
  const [isEdit, setIsEdit] = useState(false);
  const [idEdit, setIdEdit] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, id: listNotes.length, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setListNotes([...listNotes, note]);

    setNote(noteState);
    setIsEdit(false);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();

    const noteEdit = listNotes.map((item) => {
      if (item.id === idEdit) {
        return {
          ...note,
          id: idEdit,
        };
      }
      return item;
    });

    setListNotes(noteEdit);
    setIsEdit(false);
    setNote(noteState);
  };

  console.log(listNotes);

  return (
    <React.Fragment>
      <form
        className="flex flex-col items-start max-w-[300px]"
        onSubmit={!isEdit ? handleSubmit : handleSaveEdit}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          className="text-[15px] font-bold border w-full outline-none"
          value={note.title}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          className="text-[12px] border w-full outline-none"
          value={note.description}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          name="time"
          value={note.time}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          value={note.date}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">{isEdit ? "Save" : "Submit"}</button>
      </form>
      <ListNotes
        data={listNotes}
        setNote={setNote}
        setIsEdit={setIsEdit}
        setIdEdit={setIdEdit}
      />
    </React.Fragment>
  );
};

export default CreateNote;
