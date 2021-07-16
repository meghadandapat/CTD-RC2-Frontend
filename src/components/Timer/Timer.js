import { useState, useEffect, useRef } from "react";
import { Redirect } from 'react-router-dom'
  import './Timer.css'
  
  const Timer = ({ finalTime }) => {
    const [sec, setSec] = useState('');
    const [min, setMin] = useState('');
    const [hrs, setHrs] = useState('');
  
    let interval = useRef;
  
    const startTimer = () => {
      interval = setInterval(() => {
      const now = new Date().getTime();
      const gap = finalTime - now; 
       
        const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((gap % (1000 * 60)) / 1000);
  
        if (gap < 0) {
          clearInterval(interval.current);
        } else {
          minutes>=10 ? setMin(minutes) : setMin(`0`+minutes)
          seconds >= 10 ? setSec(seconds) : setSec(`0` + seconds)
          setHrs(hours);
        }
      }, 1000);
    };
  
    useEffect(() => {
     
      startTimer();
      return () => {
        clearInterval(interval.current);
      };
    }, [startTimer]);

    
      
  // if(hrs===0 && min==='00' && sec==='00') return (<Redirect push to="/result"/>)
    
    return (
      <div className="timer">
      {min} : {sec}
  </div>
    );
  };
  
  export default Timer;
