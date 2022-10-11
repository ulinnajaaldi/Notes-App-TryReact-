import { useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNote] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "16/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "17/04/2022",
    },
  ]);

  return (
    <div className="container">
      <NoteList notes={notes} />
    </div>
  );
};

export default App;
