import React from 'react';
import './index.css';
import propTypes from 'prop-types';


const Button = (props) => {
  const { onClick, text } = props;
  return (
    <div>
      <button className="Button" type="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  text: propTypes.string.isRequired,
};

export default Button;
