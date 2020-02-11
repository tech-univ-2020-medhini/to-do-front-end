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
    <img className="img" src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg" alt="W3Schools.com" />
    HELLO
    <div className="dateAndTime">
      {currentTime()}
      {' '}
      <br />
      {currentDate()}
    </div>
  </div>
);
export default ProfileWindow;
