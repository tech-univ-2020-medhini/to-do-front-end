import React from 'react';
import axios from 'axios';
import MainWindow from './Containers/MainWindow';
import ProfileWindow from './Components/ProfileWindow';
import AddNote from './Containers/AddNote';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createdNew: false,
      notesList: [],
    };
  }

  getNotes = async() => {
    const response = await axios.get('http://localhost:8080/notes');
    const noteList = response.data;
    // const descList = noteList.map(element => {
    //   return {element.id, element.description}
    // })
    this.setState({
      notesList: [...noteList]
    })
  }

  componentDidMount = () => {
    this.getNotes();
  }
  createNew = () => {
    const { notesList } = this.state;
    this.setState({
      notesList: [...notesList],
      createdNew: true,
    });
  }

  addNote = async(noteText) => {
    console.log(noteText);
    const { notesList } = this.state;
    await axios.post('http://localhost:8080/notes', {
      title: 'Note 1',
      description: noteText
    })
    this.setState({
      notesList: [...notesList, { id: '123', title: 'Note 1', description: noteText}],
      createdNew: false,
    });
  }

  deleteNote = (text) => {
    const { notesList } = this.state;
    const noteList = [...notesList];
    const index = noteList.indexOf(text);
    noteList.splice(index, 1);
    this.setState({
      notesList: [...noteList],
    });
  }

  render() {
    const { createdNew, notesList } = this.state;
    return (
      <div className="App">
      <ProfileWindow />
      { !createdNew ? (
        <MainWindow
          createNew={this.createNew}
          notesList={notesList}
          deleteNote={(id) => this.deleteNote(id)}
        />
      )
        : <AddNote addedNote={this.addNote} /> }
      </div>
    );
  }
}

export default App;