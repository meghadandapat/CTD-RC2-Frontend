import React from "react";
import "./Timer.css";


import { Redirect } from "react-router-dom";
// function component
const AnimatedCard = ({ animation, digit }) => {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const StaticCard = ({ position, digit }) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const FlipUnitContainer = ({ digit, shuffle, unit }) => {
  // assign digit values
  let currentDigit = digit;
  let previousDigit = digit - 1;

  // add zero
  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  // shuffle digits
  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  // shuffle animations
  const animation1 = shuffle ? "fold" : "unfold";
  const animation2 = !shuffle ? "fold" : "unfold";

  return (
    <div className={"flipUnitContainer"}>
      <StaticCard position={"upperCard"} digit={currentDigit} />
      <StaticCard position={"lowerCard"} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
    </div>
  );
};

// class component
class FlipClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    // Set future time
    const countDate = new Date("July 5, 2021 15:58:00").getTime();

    // get current time
    const time = new Date().getTime();

    const gap = countDate - time;

    // const minutes = time.getMinutes();
    // const seconds = time.getSeconds();

    const sec = 1000;
    const min = 1000 * 60;
    const hour = 1000 * 60 * 60;

    const minutes = Math.floor((gap % hour) / min);
    const seconds = Math.floor((gap % min) / sec);

    // on minute chanage, update minutes and shuffle state
    if (minutes !== this.state.minutes) {
      const minutesShuffle = !this.state.minutesShuffle;
      this.setState({
        minutes,
        minutesShuffle,
      });
    }
    // on second chanage, update seconds and shuffle state
    if (seconds !== this.state.seconds) {
      const secondsShuffle = !this.state.secondsShuffle;
      this.setState({
        seconds,
        secondsShuffle,
      });
    }
  }

  render() {
    // state object destructuring
    const {
      minutes,
      seconds,

      minutesShuffle,
      secondsShuffle,
    } = this.state;

    // if (minutes === 0 && seconds === 0) {
    //   return <Redirect push to="/result" />;
    // }

    return (
      <div className={"flipClock"}>
        <FlipUnitContainer
          unit={"minutes"}
          digit={minutes}
          shuffle={minutesShuffle}
        />
        <FlipUnitContainer
          unit={"seconds"}
          digit={seconds}
          shuffle={secondsShuffle}
        />
      </div>
    );
  }
}

export default FlipClock;
