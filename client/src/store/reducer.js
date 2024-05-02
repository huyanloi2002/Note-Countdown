import actionTypes from "./actionTypes";

export const noteState = {
  note: {
    id: "",
    title: "",
    description: "",
    time: "",
    date: "",
    isAttach: false,
    createdAt: new Date(),
    index: 0,
  },
  listNotes: [],
  isOpenModal: {
    type: "",
    isOpen: false,
  },
};

const noteReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_NOTE:
      return {
        ...state,
        note: action.payload,
      };
    case actionTypes.ADD_NOTE:
      return {
        ...state,
        listNotes: [...state.listNotes, action.payload],
      };
    case actionTypes.UPDATE_NOTE:
      return {
        ...state,
        listNotes: state.listNotes.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      };
    case actionTypes.DELETE_NOTE:
      return {
        ...state,
        listNotes: state.listNotes.filter((item) => item.id !== action.payload),
      };
    case actionTypes.ATTACH_NOTE:
      return {
        ...state,
        listNotes: action.payload.array.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              isAttach: true,
            };
          }
          return item;
        }),
      };
    case actionTypes.UNATTACH_NOTE:
      return {
        ...state,
        listNotes: action.payload.array.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              isAttach: false,
            };
          }
          return item;
        }),
      };
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        isOpenModal: {
          type: action.payload.type,
          isOpen: action.payload.isOpen,
        },
      };
    case actionTypes.ID_RANDOM:
      return {
        ...state,
        note: {
          ...state.note,
          id: action.payload,
        },
      };
    case actionTypes.CLEAR_NOTE:
      return {
        ...state,
        note: noteState.note,
      };
    default:
      return state;
  }
};

export default noteReducer;
