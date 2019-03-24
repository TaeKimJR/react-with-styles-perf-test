import React from 'react';
import { withStyles } from 'react-with-styles';
import UnstyledComponent from './common/UnstyledComponent';
import createTask from './common/createTask';

const Unique = () => {
  const StyledComponent = withStyles(() => ({
    container: {
      color: "#"+((1<<24)*Math.random()|0).toString(16),
    },
  }))(UnstyledComponent);

  return <StyledComponent />
};

export default createTask('Unique', Unique);
