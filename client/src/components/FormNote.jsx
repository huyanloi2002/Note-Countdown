import React from "react";
import { useContext } from "react";
import { Context } from "../store/Context";

const FormNote = ({
  onSubmit,
  onChange,
  nameSubmit = "Add",
  title = "Add note",
}) => {
  const { state } = useContext(Context);

  const { note } = state;

  return (
    <React.Fragment>
      <form
        className="flex flex-col items-start max-w-[300px] "
        onSubmit={onSubmit}
      >
        <h1 className="font-bold uppercase text-center w-full">{title}</h1>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          className="text-[15px] font-bold border w-full outline-none"
          value={note.title}
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          className="text-[12px] border w-full outline-none"
          value={note.description}
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          name="time"
          value={note.time}
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          value={note.date}
          onChange={(e) => onChange(e)}
        />
        <button
          type="submit"
          className="w-full border-2 border-[green] rounded-md"
        >
          {nameSubmit}
        </button>
      </form>
    </React.Fragment>
  );
};

export default FormNote;
