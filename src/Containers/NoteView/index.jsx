import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { useLocation, Redirect } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const NoteView = (props) => {
  const { notes, isLoaded } = props;
  const query = useQuery();
  const noteId = query.get('noteID');
  const todoView = notes.filter((note) => note.id === noteId);
  if (isLoaded === null) {
    return (<div>Loading ....</div>);
  }
  return (
    todoView.length !== 0
      ? (
        <div className="CreateTodo">
          {todoView[0].id}
          <br />
          {todoView[0].title}
          <br />
          {todoView[0].description}
          <br />
          {/* <button type="button" onClick={history.push('/new')}>LIST</button> */}
        </div>
      )
      : <Redirect to="/" />

  );
};
NoteView.propTypes = {
  notes: propTypes.arrayOf(propTypes.shape({})).isRequired,
  // eslint-disable-next-line react/require-default-props
  isLoaded: propTypes.isRequired,
};

export default NoteView;
