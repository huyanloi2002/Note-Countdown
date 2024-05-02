import React from "react";
import Countdown from "./Countdown";
import { toISOString } from "../utils/toISOString";
import moment from "moment";

const BoxOutstandingNote = ({ item, key, style }) => {
  return (
    <React.Fragment>
      <div
        className="w-full h-[350px] p-2 text-center bg-primary text-white"
        key={key}
        style={style}
      >
        <Countdown
          ISOString={toISOString(item.date, item.time)}
          fontSize="text-[100px]"
        />
        <p className="font-bold uppercase text-[30px]">{item.title}</p>
        <small>{item.description && `(${item.description})`}</small>
        <div className="flex justify-center gap-2 py-2">
          <div className="min-w-[100px] mix-h ">
            <p className="rounded-md uppercase font-bold text-[13px] bg-light-orange">
              Time
            </p>
            <p className="font-bold mt-1 py-2 border rounded-md">{item.time}</p>
          </div>
          <div className="min-w-[100px]">
            <p className=" rounded-md uppercase font-bold text-[13px] bg-light-orange">
              Date
            </p>
            <p className="font-bold mt-1 py-2 border rounded-md">
              {moment(item.date).format("DD-MM-YY")}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BoxOutstandingNote;
