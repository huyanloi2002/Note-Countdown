import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../styles/fullcalendar.css";

const Calendar = () => {
  const [isHover, setIsHover] = useState(false);
  const [publicId, setPublicId] = useState("");
  const [positionX, setPositionX] = useState("right-[-200px]");

  const handleEventClick = (agr) => {
    console.log(agr);
  };

  const modalRef = useRef();
  const calendarRef = useRef();

  const handleEventMouseEnter = (agr) => {
    setIsHover(true);
    const { publicId } = agr.event._def;
    setPublicId(publicId);
    const { clientX } = agr.jsEvent;
    const calendarWidth = calendarRef.current.getBoundingClientRect().width;
    const modalEventWidth = modalRef.current.getBoundingClientRect().width;

    if (clientX >= calendarWidth - modalEventWidth) {
      setPositionX("left-[-200px]");
    } else {
      setPositionX("right-[-200px]");
    }
  };

  const renderEventContent = (eventInfo) => {
    const { title, extendedProps, publicId: id } = eventInfo.event._def;
    console.log(eventInfo);

    return (
      <div
        className="bg-primary rounded-full text-center relative"
        ref={modalRef}
      >
        <p className="text-[10px] uppercase font-bold p-1 break-all text-ellipsis">
          {title}
        </p>
        {isHover && publicId === id && (
          <div
            className={`modal-day absolute top-[-50%] ${positionX} !text-[black] z-50 h-[300px] w-[200px]
            transition-all delay-100 ease-in-out rounded-md bg-white shadow-2xl border-2
            `}
          >
            <p>{title}</p>
            <p>{extendedProps.description}</p>
            <p>{extendedProps.dayStr}</p>
            <p>{extendedProps.time}</p>
          </div>
        )}
      </div>
    );
  };
  const handleDateClick = (agr) => {
    console.log(agr);
  };

  const handleEventMouseLeave = () => {
    setIsHover(false);
  };

  const renderDayCellContent = (arg) => {
    return (
      <div className="w-full h-full">
        <p className="day-number-cell-content font-bold">{arg.dayNumberText}</p>
        <i
          className="btn-add-day cursor-pointer fa-solid fa-plus transition-all delay-100 ease-in-out text-[red]
        "
        ></i>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="w-full" ref={calendarRef}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={[
            {
              id: "asdf",
              title: "Ngay giai phong Mien Nam",
              description: "30/04",
              time: "10:00",
              dayStr: "2024-04-30",
              date: "2024-04-30",
            },
            {
              id: "ghjk",
              title: "Ngay sinh cua chu tich Ho Chi Minh",
              description: "19/05",
              time: "15:00",
              dayStr: "2024-05-19",
              date: "2024-05-19",
            },
            {
              id: "qwer",
              title: "Di choi cung gia dinh",
              description: "04/05",
              time: "07:00",
              dayStr: "2024-05-04",
              date: "2024-05-04",
            },
          ]}
          eventClick={handleEventClick}
          eventContent={renderEventContent}
          eventMouseEnter={handleEventMouseEnter}
          eventMouseLeave={handleEventMouseLeave}
          dateClick={handleDateClick}
          dayCellContent={renderDayCellContent}
        />
      </div>
    </React.Fragment>
  );
};

export default Calendar;
