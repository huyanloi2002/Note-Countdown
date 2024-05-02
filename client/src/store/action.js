import actionTypes from "./actionTypes";

export const setNote = (payload) => {
  try {
    return {
      type: actionTypes.SET_NOTE,
      payload,
    };
  } catch (err) {
    console.log(err);
  }
};

export const addNote = (payload) => {
  try {
    return {
      type: actionTypes.ADD_NOTE,
      payload,
    };
  } catch (err) {
    console.log(err);
  }
};

export const updateNote = (payload) => {
  try {
    return {
      type: actionTypes.UPDATE_NOTE,
      payload,
    };
  } catch (err) {
    console.log(err);
  }
};

export const deleteNote = (payload) => {
  try {
    return {
      type: actionTypes.DELETE_NOTE,
      payload,
    };
  } catch (err) {
    console.log(err);
  }
};

export const attachNote = (payload) => {
  try {
    return {
      type: actionTypes.ATTACH_NOTE,
      payload,
    };
  } catch (err) {
    console.log(err);
  }
};

export const unattachNote = (payload) => {
  try {
    return {
      type: actionTypes.UNATTACH_NOTE,
      payload,
    };
  } catch (err) {
    console.log(err);
  }
};

export const openModal = (payload) => {
  try {
    return {
      type: actionTypes.OPEN_MODAL,
      payload,
    };
  } catch (err) {
    console.log(err);
  }
};

export const clearNote = () => {
  try {
    return {
      type: actionTypes.CLEAR_NOTE,
    };
  } catch (err) {
    console.log(err);
  }
};

export const idRandomAction = (payload) => {
  try {
    return {
      type: actionTypes.ID_RANDOM,
      payload,
    };
  } catch (err) {
    console.log(err);
  }
};
