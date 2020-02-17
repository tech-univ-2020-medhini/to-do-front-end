import React, { useState, useEffect, useLocation } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import MainWindow from './Containers/MainWindow';
import ProfileWindow from './Components/ProfileWindow';
import AddNote from './Containers/AddNote';
import NoteView from './Containers/NoteView';
import './App.css';


const App = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     createdNew: false,
  //     notesList: [],
  //   };
  // }

  const [createdNew, setCreatedNew] = useState(false);
  const [notesList, setNotesList] = useState([]);
  const [loaded, setLoaded] = useState(null);

  const getNotes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/notes');
      const noteList = response.data;
      // const descList = noteList.map(element => {
      //   return {element.id, element.description}
      // })
      setNotesList([...noteList]);
      setLoaded(true);
    } catch (err) {
      setLoaded(true);
    }
  };

  // componentDidMount = () => {
  //   this.getNotes();
  // }
  useEffect(() => {
    getNotes();
  }, []);

  const createNew = () => {
    setCreatedNew(true);
  };

  const addNote = async (noteText) => {
    try {
      await axios.post('http://localhost:8080/notes', {
        title: 'Note 1',
        description: noteText,
      });
      setNotesList([...notesList, { id: '123', title: 'Note 1', description: noteText }]);
      // (<Redirect
      //   to={{
      //     pathname: '/',
      //     state: { from: location },
      //   }}
      // />);
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteNote = (text) => {
    const noteList = [...notesList];
    const index = noteList.indexOf(text);
    noteList.splice(index, 1);
    setNotesList([...noteList]);
  };
  return (
    <Router>
      <div className="App">
        <ProfileWindow />
        {/* { !createdNew ? (
        <MainWindow
          createNew={createNew}
          notesList={notesList}
          deleteNote={(id) => deleteNote(id)}
        />
      )
        : <AddNote addedNote={addNote} /> } */}
        <Switch>
          <Route exact path="/new">
            <AddNote addedNote={addNote} />
          </Route>
          <Route exact path="/view">
            <NoteView notes={notesList} isLoaded={loaded} />
          </Route>
          <Route path="/">
            <MainWindow
              createNew={createNew}
              notesList={notesList}
              deleteNote={(id) => deleteNote(id)}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
