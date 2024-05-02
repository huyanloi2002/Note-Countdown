export const toISOString = (date, time) => {
  const datetime = `${date}T${time}:00`;

  return datetime;
};
