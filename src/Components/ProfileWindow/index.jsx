import React from 'react';
import './index.css';

const currentTime = () => {
  const d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
};

const currentDate = () => {
  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  const strDate = `${day} / ${month + 1} /${year}`;
  return strDate;
};

const ProfileWindow = () => (
  <div className="ProfileBar">
    <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="W3Schools.com" />
    HI
    <div className="dateAndTime">
      {currentTime()}
      {' '}
      <br />
      {currentDate()}
    </div>
  </div>
);
export default ProfileWindow;
