import React from 'react';
import propTypes from 'prop-types';
import NotesContainer from '../NotesContainer';
import Button from '../../Components/Button';


import './index.css';

const MainWindow = (props) => {
  const { createNew, notesList, deleteNote } = props;
  return (
    <div className="MainWindow">
      <div className="title">
        To Do
      </div>
      <NotesContainer notesList={notesList} deleteNote={(text) => deleteNote(text)} />
      <Button text="New Note" onClick={createNew} />
    </div>
  );
};

MainWindow.propTypes = {
  createNew: propTypes.func.isRequired,
  notesList: propTypes.node.isRequired,
  deleteNote: propTypes.func.isRequired,
};


export default MainWindow;
