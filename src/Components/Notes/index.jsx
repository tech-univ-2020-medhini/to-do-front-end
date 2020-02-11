import React from 'react';
import './index.css';
import propTypes from 'prop-types';
import Button from '../Button';


function Notes(props) {
  const { noteobj, deleteNote } = props;
  return (
    <div className="NoteCard">
      {noteobj.description}
      <Button text="DONE" onClick={() => deleteNote(noteobj.id)} />
    </div>
  );
}

Notes.propTypes = {
  note: propTypes.isRequired,
  deleteNote: propTypes.func.isRequired,
};

export default Notes;
