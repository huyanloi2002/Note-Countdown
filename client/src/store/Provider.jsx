import { Context } from "./Context.jsx";
import { useReducer, useMemo } from "react";
import noteReducer, { noteState } from "./reducer.js";

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, noteState);

  const value = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
