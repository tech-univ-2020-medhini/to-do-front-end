import React from 'react';
import propTypes from 'prop-types';
import Button from '../../Components/Button';

import './index.css';

class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charCount: 0,
      description: '',
    };
  }

  charCounter = (event) => {
    const length = event.target.value.length;
    const text = event.target.value;
    console.log(length)
    this.setState({
      charCount: length,
      description: text
    });
  }

  render() {
    const { addedNote } = this.props;
    const { charCount } = this.state;
    return (
      <div className="AddNote">
        <textarea id="description" maxLength="1000" rows="8" onInput={(event) => this.charCounter(event)} />
        Characters left:
        {' '}
        {charCount}
        /100
        <Button text="Add Note" onClick={() => addedNote(this.state.description)} />
      </div>
    );
  }
}

AddNote.propTypes = {
  addedNote: propTypes.func.isRequired,
};

export default AddNote;
