import React from 'react';
import propTypes from 'prop-types';
import Button from '../../Components/Button';

import './index.css';

// const charCount = () => document.getElementById('note-description').value.length;

class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charCount: 0,
    };
  }

  charCounter() {
    const noteText = document.getElementById('note-description').value.length;
    this.setState({
      charCount: noteText,
    });
  }

  render() {
    const { AddTypedNote } = this.props;
    const { charCount } = this.state;
    return (
      <div className="AddNote">
        <textarea id="note-description" maxLength="100" rows="8" onInput={this.charCounter} />
        Characters left:
        {' '}
        {charCount}
        /100
        <Button text="ADD NOTE" onClick={AddTypedNote} />
      </div>
    );
  }
}

AddNote.propTypes = {
  AddTypedNote: propTypes.func.isRequired,

};

export default AddNote;
