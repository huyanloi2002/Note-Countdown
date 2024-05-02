const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const createIdRandom = () => {
  let idLength = 5;

  const arrLetter = [];
  for (let i = 0; i < idLength; i++) {
    const letter = Math.floor(Math.random() * letters.length);

    arrLetter.push(letters[letter]);
  }
  const id = arrLetter.join("");

  return id;
};
