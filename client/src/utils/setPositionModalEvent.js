export const setModalPositionX = (client, totalWidth, elementWidth) => {
  if (client >= totalWidth - elementWidth - 100) {
    return "left-[-200px]";
  } else {
    return "right-[-200px]";
  }
};

export const setModalPositionY = (client, totalHeight, elementBottom) => {
  if (client >= totalHeight - elementBottom) {
    return "bottom-[-50%]";
  } else {
    return "top-[-50%]";
  }
};
