import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import Search from "./components/Search";
import Header from "./components/Header";

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

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (saveNotes) {
      setNote(saveNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNote(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNote(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
