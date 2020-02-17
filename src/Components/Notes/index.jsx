import React from 'react';
import './index.css';
import propTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import Button from '../Button';


function Notes(props) {
  const { noteobj, deleteNote } = props;
  const path = `/view?noteID=${noteobj.id}`;
  return (
    <div className="NoteCard">
      <Link to={path}>
        {noteobj.description}
      </Link>
      <Button text="DONE" onClick={() => deleteNote(noteobj.id)} />
    </div>
  );
}

Notes.propTypes = {
  noteobj: propTypes.isRequired,
  deleteNote: propTypes.func.isRequired,
};

export default Notes;
