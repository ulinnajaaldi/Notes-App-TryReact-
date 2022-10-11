import Note from "./Note";

const NoteList = ({ notes }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note id={notes.id} text={note.text} date={note.date} />
      ))}
    </div>
  );
};
export default NoteList;
