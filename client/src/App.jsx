import React from "react";
import "./styles/App.css";
import OutstandingNote from "./components/OutstandingNote";
import CreateNote from "./components/CreateNote";
import ListNotes from "./components/ListNotes";
import EditNote from "./components/EditNote";
import Calendar from "./components/Calendar";

function App() {
  return (
    <React.Fragment>
      <OutstandingNote />
      <Calendar />
      {/* <CreateNote />
      <ListNotes />
      <EditNote /> */}
    </React.Fragment>
  );
}

export default App;
