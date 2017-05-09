import React, { Component } from 'react';
import Button from 'simple-react-button';

const propTypes = {
};

const defaultProps = {};

const initialState = {};

const state = {
      showStart: true,
      secondsElapsed: 0,
      decisecondsElapsed: 0,
      milliseconds: 0
};
export default class Stopwatch extends Component {

  constructor(props) {
    super(props);
    this.state = state;
    this.incrementer = null;
  }  

  handleStartClick() {
    this.state.showStart = false;
    this.incrementer = setInterval( () => {
        this.setState({
          milliseconds: this.state.milliseconds + 10,
        })
        this.msToSD()
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

  msToSD() {
     var seconds = ((this.state.milliseconds % 60000) / 1000).toFixed(2);
     var timeArr = seconds.split("."); 
     this.setState({
        secondsElapsed: timeArr[0],
        decisecondsElapsed: timeArr[1],
    });
  }

  render() {
    return (
     <div>
          <h2>{this.state.secondsElapsed}s {this.state.decisecondsElapsed}</h2>
          {this.state.showStart && <Button value='START' clickHandler={this.handleStartClick.bind(this)} />}
          {!this.state.showStart && <Button value='STOP' clickHandler={this.handleStopClick.bind(this)} />}
          <Button value='RESET' clickHandler={this.handleResetClick.bind(this)} />
      </div>
    );
  }
}

Stopwatch.propTypes = propTypes;
Stopwatch.defaultProps = defaultProps;
Stopwatch.initialState = initialState;
Stopwatch.state = state;
