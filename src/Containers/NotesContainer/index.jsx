import React from 'react';
import propTypes from 'prop-types';
import Note from '../../Components/Notes';
import './index.css';

const NotesContainer = (props) => {
  const { notesList, deleteNote } = props;
  const notes = [...notesList].map((note) => (
    // eslint-disable-next-line react/no-array-index-key
    <Note key={note.id} noteobj={note} deleteNote={(text) => deleteNote(text)} />
  ));
  return (
    <div className="NotesContainer">
      {notes}
    </div>
  );
};

NotesContainer.propTypes = {
  notesList: propTypes.arrayOf(propTypes.objects).isRequired,
  deleteNote: propTypes.func.isRequired,
};

export default NotesContainer;
