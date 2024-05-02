import { useReducer } from "react";
import noteReducer, { noteState } from "../store/reducer";

export const useStore = () => {
  const [state, dispatch] = useReducer(noteReducer, noteState);
  return [state, dispatch];
};
