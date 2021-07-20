import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {Redirect} from 'react-router-dom'

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 65,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  if (dimension < 1) {
    return (<Redirect push to="/result"/>)
  }
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function Timer() {
 
  var endTime = 1740; // This is the time allowed
  var saved_countdown = localStorage.getItem('saved_countdown');
  
  if(saved_countdown == null) {
      // Set the time we're counting down to using the time allowed
      var new_countdown = Date.now() / 1000 + 1740;
  
      endTime = new_countdown;
      localStorage.setItem('saved_countdown', new_countdown);
  } else {
      endTime = saved_countdown;
  }
  

// const stratTime = Date.now() / 1000; 
// use UNIX timestamp in seconds

  const remainingTime = endTime -  Date.now() / 1000;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;



  return (
    <div className="countdown-circle">
      
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#fff"]]}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > minuteSeconds
        ]}
      >
        {({ elapsedTime }) =>
          renderTime( getTimeMinutes(hourSeconds - elapsedTime))
        }
      </CountdownCircleTimer>
    
    </div>
  );
}
