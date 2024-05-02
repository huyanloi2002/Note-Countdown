export const moveArray = (array, to, from) => {
  const element = array.splice(from, 1)[0];

  array.splice(to, 0, element);

  return array;
};
