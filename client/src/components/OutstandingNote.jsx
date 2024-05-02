import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/Context";
import Slide from "./Slide";
import BoxOutstandingNote from "./BoxOutstandingNote";

const OutstandingNote = () => {
  const { state } = useContext(Context);
  const { listNotes } = state;

  const [listAttachNotes, setAttachNotes] = useState([]);

  useEffect(() => {
    setAttachNotes(listNotes.filter((item) => item.isAttach === true));

    return () => {};
  }, [listNotes]);

  return (
    <React.Fragment>
      <Slide data={listAttachNotes} Content={BoxOutstandingNote} show={1} />
    </React.Fragment>
  );
};

export default OutstandingNote;
