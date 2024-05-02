import React, { useContext } from "react";
import moment from "moment";
import Countdown from "../components/Countdown";
import { Context } from "../store/Context";
import {
  setNote,
  openModal,
  deleteNote,
  attachNote,
  unattachNote,
} from "../store/action";
import { moveArray } from "../utils/moveArray";
import { toISOString } from "../utils/toISOString";

const ListNotes = () => {
  const { state, dispatch } = useContext(Context);
  const { listNotes } = state;

  const handleSetEdit = (item) => {
    dispatch(openModal({ type: "edit", isOpen: true }));
    dispatch(setNote(item));
  };
  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };
  const handleAttachNote = (id, isAttach, index) => {
    const array = moveArray(listNotes, 0, index);

    dispatch(attachNote({ array, id, isAttach }));
  };
  const handleUnAttachNote = (id, isAttach, index, indexCurrent) => {
    const array = moveArray(listNotes, index, indexCurrent);
    dispatch(unattachNote({ array, id, isAttach }));
  };
  return (
    <React.Fragment>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border">Title</th>
            <th className="border">Description</th>
            <th className="border">Date</th>
            <th className="border">Count down</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        {listNotes &&
          listNotes.map((item, index) => (
            <tbody
              key={index}
              className={`${item.isAttach && "bg-light-orange"} text-center`}
            >
              <tr>
                <td className="border font-bold uppercase">{item.title}</td>
                <td className="border text-[13px]">{item.description}</td>
                <td className="border">{`${item.time}, ${moment(
                  item.date
                ).format("DD/MM/YYYY")}`}</td>
                <td className="border">
                  <Countdown ISOString={toISOString(item.date, item.time)} />
                </td>
                <td className="border font-bold">
                  <i
                    className="fa-solid fa-pencil p-2 mx-1 text-[green] cursor-pointer border"
                    title="edit"
                    onClick={() => handleSetEdit(item)}
                  ></i>
                  <i
                    className="fa-solid fa-trash p-2 mx-1 text-[red] cursor-pointer border"
                    title="delete"
                    onClick={() => handleDeleteNote(item.id)}
                  ></i>
                  <i
                    className={`fa-solid fa-paperclip p-2 mx-1 ${
                      item.isAttach ? "text-[gray]" : "text-[orange]"
                    } cursor-pointer border`}
                    title={item.isAttach ? "unattach" : "attach"}
                    onClick={
                      item.isAttach
                        ? () =>
                            handleUnAttachNote(
                              item.id,
                              item.isAttach,
                              item.index,
                              index
                            )
                        : () => handleAttachNote(item.id, item.isAttach, index)
                    }
                  ></i>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </React.Fragment>
  );
};

export default ListNotes;
