import React from "react";
import moment from "moment";
import Countdown from "../components/Countdown";

const ListNotes = ({ data, setNote, setIsEdit, setIdEdit }) => {
  const handleSetEdit = (item) => {
    setIdEdit(item.id);
    setNote(item);
    setIsEdit(true);
  };

  return (
    <React.Fragment>
      <table className="w-full">
        <tr>
          <th className="border">Title</th>
          <th className="border">Description</th>
          <th className="border">Date</th>
          <th className="border">Count down</th>
          <th className="border">Action</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index} className="text-center">
            <td className="border font-bold">{item.title}</td>
            <td className="border">{item.description}</td>
            <td className="border">{`${item.time}, ${moment(item.date).format(
              "DD/MM/YYYY"
            )}`}</td>
            <td className="border">
              <Countdown ISOString={`${item.date}T${item.time}:00`} />
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
              ></i>
              <i
                className="fa-solid fa-paperclip p-2 mx-1 text-[orange] cursor-pointer border"
                title="attach"
              ></i>
            </td>
          </tr>
        ))}
      </table>
    </React.Fragment>
  );
};

export default ListNotes;
