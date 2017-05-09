import React, { Component } from 'react';
import Button from 'simple-react-button';

const propTypes = {
};

const defaultProps = {};

const initialState = {};

const state = {
      showStart: true,
      minutesElapsed: 5,
      secondsElapsed: 0,
      milliseconds: 300000 // 5 minutes
};

export default class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = state;
    this.incrementer = null;
  }  

  handleStartClick() {
    this.state.showStart = false;
    this.incrementer = setInterval( () => {
        this.setState({
          milliseconds: this.state.milliseconds - 10,
        })
        this.msToMS()
      }
    , 10);
  }
  
  handleStopClick() {
    this.state.showStart = true;
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer
    });
  }
  
  handleResetClick() {
    clearInterval(this.incrementer);
    state.showStart = true;
    this.setState(state);
  }

  msToMS() {
     var minutes = Math.floor(this.state.milliseconds / 60000);
     var seconds = ((this.state.milliseconds % 60000) / 1000).toFixed(0) - 1;
     this.setState({
        minutesElapsed: minutes,
        secondsElapsed: (seconds < 10 ? '0' : '') + seconds
    });
  }

  render() {
    return (
      <div>
          <h2>{this.state.minutesElapsed}m {this.state.secondsElapsed}s</h2>
          {this.state.showStart && <Button value='START' clickHandler={this.handleStartClick.bind(this)} />}
          {!this.state.showStart && <Button value='STOP' clickHandler={this.handleStopClick.bind(this)} />}
          <Button value='RESET' clickHandler={this.handleResetClick.bind(this)} />
      </div>
    );
  }
}

Timer.propTypes = propTypes;
Timer.defaultProps = defaultProps;
Timer.initialState = initialState;
Timer.state = state;