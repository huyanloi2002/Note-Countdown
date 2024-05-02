import React, { useContext } from "react";
import Modal from "./Modal";
import FormNote from "./FormNote";
import { Context } from "../store/Context";
import { setNote, updateNote, clearNote, openModal } from "../store/action";

const EditNote = () => {
  const { state, dispatch } = useContext(Context);

  const { note } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateNote(note));

    dispatch(clearNote());

    dispatch(openModal({ type: "", isOpen: false }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setNote({ ...note, [name]: value }));
  };

  return (
    <React.Fragment>
      <Modal type="edit">
        <FormNote
          nameSubmit="Edit"
          title="Edit note"
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
      </Modal>
    </React.Fragment>
  );
};

export default EditNote;
