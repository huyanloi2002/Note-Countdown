import React, { useEffect, useState } from "react";

const Countdown = ({
  hours = 0,
  date = new Date().getDate(),
  ISOString = "",
  fontSize = "",
}) => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;

  const configDate = !ISOString
    ? `${year}-${month < 10 ? `0${month}` : month}-${date}T${
        hours < 10 ? `0${hours}` : hours
      }:00:00`
    : ISOString;

  const timeCountDown = new Date(configDate).getTime();

  useEffect(() => {
    const timeId = setInterval(() => {
      const now = new Date().getTime();

      const timeLeft = timeCountDown - now;

      const day = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minute = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((timeLeft % (1000 * 60)) / 1000);

      if (timeLeft < 0) {
        clearInterval(timeId);
      } else {
        setDay(day);
        setHour(hour);
        setMinute(minute);
        setSecond(second);
      }
    }, 1000);
    return () => {
      clearInterval(timeId);
    };
  }, [timeCountDown]);

  return (
    <React.Fragment>
      <div
        className={`flex justify-center font-bold tracking-[1px] ${fontSize}`}
      >
        <div className="hour">{day < 10 ? `0${day}` : day}:</div>
        <div className="hour ">{hour < 10 ? `0${hour}` : hour}:</div>
        <div className="minute ">{minute < 10 ? `0${minute}` : minute}:</div>

        <div className="second ">{second < 10 ? `0${second}` : second}</div>
      </div>
    </React.Fragment>
  );
};

export default Countdown;
