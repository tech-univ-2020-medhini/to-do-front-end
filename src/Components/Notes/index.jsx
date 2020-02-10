import React from 'react';
import './index.css';
import propTypes from 'prop-types';
import Button from '../Button';


function Notes(props) {
  const { text, deleteNote } = props;
  return (
    <div className="NoteCard">
      {text}
      <Button text="DONE" onClick={() => deleteNote(text)} />
    </div>
  );
}

Notes.propTypes = {
  text: propTypes.string.isRequired,
  deleteNote: propTypes.func.isRequired,
};

export default Notes;
