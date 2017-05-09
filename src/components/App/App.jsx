import React, { Component } from 'react';
import { render } from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Button from 'simple-react-button';

import Timer from '../Timer/Timer.jsx';
import Stopwatch from '../Stopwatch/Stopwatch.jsx';

export default class App extends Component {

  render() {
    return (
       <Tabs selectedIndex={0}>
        <TabList>
          <Tab>TIMER</Tab>
          <Tab>STOPWATCH</Tab>
        </TabList>
        <TabPanel>
          < Timer />
        </TabPanel>
        <TabPanel>
          < Stopwatch />
        </TabPanel>
      </Tabs>
    );
  }
}
