import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  const handleEventClick = (agr) => {
    console.log(agr);
  };
  const renderEventContent = (eventInfo) => {
    return <i>{eventInfo.event.title}</i>;
  };
  const handleDateClick = (agr) => {
    console.log(agr);
  };

  useEffect(() => {
    const dayContent = document.querySelectorAll("td.fc-day");
    const dayNumber = document.querySelectorAll(".day-number-cell-content");

    for (let i = 0; i < dayContent.length; i++) {
      dayContent[i].classList.add("group");
      dayContent[i].classList.remove("fc-day-other");
      dayNumber[i].style.opacity = 0.3;
    }
  }, []);

  const renderDayCellContent = (arg) => {
    return (
      <div style={{ opacity: "1 !important" }}>
        <p className="day-number-cell-content">{arg.dayNumberText}</p>
        <i
          className="cursor-pointer fa-solid fa-plus opacity-0 group-hover:opacity-100 
        transition-all delay-100 ease-in-out text-[red]
        "
        ></i>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={[
            {
              title: "30/4",
              description: "Ngay giai phong Mien Nam",
              date: "2024-04-30",
            },
            {
              title: "19/5",
              description: "Ngay sinh cua chu tich Ho Chi Minh",
              date: "2024-05-19",
            },
          ]}
          eventClick={handleEventClick}
          eventContent={renderEventContent}
          dateClick={handleDateClick}
          dayCellContent={renderDayCellContent}
        />
      </div>
    </React.Fragment>
  );
};

export default Calendar;
