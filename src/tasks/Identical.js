import React from 'react';
import { withStyles } from 'react-with-styles';
import UnstyledComponent from './common/UnstyledComponent';
import createTask from './common/createTask';

const Identical = () => {
  const StyledComponent = withStyles(() => ({
    container: {
      color: 'red',
    },
  }))(UnstyledComponent);

  return <StyledComponent />
};

export default createTask('Identical', Identical);
