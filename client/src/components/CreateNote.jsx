import React, { useContext } from "react";
import {
  setNote,
  addNote,
  clearNote,
  openModal,
  idRandomAction,
} from "../store/action";
import FormNote from "./FormNote.jsx";
import { Context } from "../store/Context.jsx";
import Modal from "../components/Modal.jsx";
import { createIdRandom } from "../utils/createIdRandom.js";

const CreateNote = () => {
  const { state, dispatch } = useContext(Context);
  const { note, listNotes } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      setNote({
        ...note,
        index: listNotes.length,
        [name]: value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addNote(note));

    dispatch(clearNote());

    dispatch(openModal({ type: "", isOpen: false }));
  };

  const hanldeOnOpenModal = () => {
    dispatch(openModal({ type: "add", isOpen: true }));

    const id = createIdRandom();

    dispatch(idRandomAction(id));
  };

  return (
    <React.Fragment>
      <Modal nameButton="Add note" onOpen={hanldeOnOpenModal} type="add">
        <div>
          <FormNote
            onSubmit={handleSubmit}
            onChange={handleChange}
            nameSubmit="Add"
            title="Add note"
          />
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default CreateNote;
