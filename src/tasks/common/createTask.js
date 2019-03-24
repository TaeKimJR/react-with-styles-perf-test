import React from 'react';
import { NUMBER_OF_ITEMS_TO_RENDER } from './constants';

const createTask = (taskName, ComponentToRender) => {
  class Task extends React.Component {
    constructor() {
      super();

      this.startTimer = performance.now();
    }

    componentDidMount() {
      const endTimer = performance.now();
      const time = (endTimer - this.startTimer);

      console.log(`Total time of ${taskName}: ${time} ms`);
      console.log(`Average of ${taskName}: ${time / NUMBER_OF_ITEMS_TO_RENDER} ms`);
    }

    render() {
      let tasks = [];
      for(var i = 0; i < NUMBER_OF_ITEMS_TO_RENDER - 1; i++) {
        tasks = [...tasks, <ComponentToRender key={i} />];
      }

      return (
        <React.Fragment>
          {tasks}
        </React.Fragment>
      );
    }
  }

  return Task;
};

export default createTask;
