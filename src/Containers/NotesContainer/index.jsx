import React from 'react';
import propTypes from 'prop-types';
import NoteCard from '../../Components/Notes';
import './index.css';

const NotesContainer = (props) => {
  const { noteList, deleteNote } = props;
  const notes = [...noteList].reverse().map((note, nodeIndex) => (
    // eslint-disable-next-line react/no-array-index-key
    <NoteCard key={nodeIndex} text={note} deleteNote={(text) => deleteNote(text)} />
  ));
  return (
    <div className="NotesContainer">
      {notes}
    </div>
  );
};

NotesContainer.propTypes = {
  noteList: propTypes.arrayOf(propTypes.string).isRequired,
  deleteNote: propTypes.func.isRequired,
};

export default NotesContainer;
