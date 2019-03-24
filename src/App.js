import React from 'react';
import { withStyles } from './withStyles';
import Identical from './tasks/Identical';
import Unique from './tasks/Unique';
import ExtendedIdentical from './tasks/ExtendedIdentical';
import ExtendedUnique from './tasks/ExtendedUnique';

const tasks = {
  Identical,
  Unique,
  ExtendedIdentical,
  ExtendedUnique,
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskOpen: null,
    };

    this.openTask = this.openTask.bind(this);
  }

  openTask(task) {
    this.setState({
      taskOpen: task,
    });
  }

  render() {
    const { css, styles } = this.props;

    return (
      <div>
        {
          Object.keys(tasks).map(taskKey => {
            const Task = tasks[taskKey];

            return (
              <div key={taskKey} {...css(styles.taskContainer)}>
                <button onClick={() => this.openTask(taskKey)}>{`Click me to run ${taskKey}`}</button>
                <div {...css(styles.taskItems)}>
                  {this.state.taskOpen === taskKey && <Task />}
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
};

export default withStyles(() => ({
  taskContainer: {
    borderBottom: '1px solid black',
    marginBottom: '20px',
  },

  taskItems: {
    marginLeft: '15px',
  },
}))(App);
