import React from 'react';
import propTypes from 'prop-types';
import NotesContainer from '../NotesContainer';
import Button from '../../Components/Button';


import './index.css';

const MainWindow = (props) => {
  const { CreateNewClick, noteList, deleteNote } = props;
  return (
    <div className="HomePage">
      <div className="title">
        ALL TODOs
      </div>
      <NotesContainer noteList={noteList} deleteNote={(text) => deleteNote(text)} />
      <Button text="CREATE NEW" onClick={CreateNewClick} />
    </div>
  );
};

MainWindow.propTypes = {
  CreateNewClick: propTypes.func.isRequired,
  noteList: propTypes.node.isRequired,
  deleteNote: propTypes.func.isRequired,
};


export default MainWindow;
