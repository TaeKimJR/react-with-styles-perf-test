import React from 'react';
import { withStyles } from 'react-with-styles';
import UnstyledComponent from './common/UnstyledComponent';
import createTask from './common/createTask';

const ExtendedIdentical = () => {
  const StyledComponent = withStyles(
    () => ({
      container: {
        color: 'red',
      },
    }),
    {
      extendableStyles: {
        container: {
          color: true,
        },
      }
    }
  )(UnstyledComponent);
  const ExtendedStyledComponent = StyledComponent.extendStyles(() => ({
    container: {
      color: 'blue',
    }
  }));

  return <ExtendedStyledComponent />
};

export default createTask('ExtendedIdentical', ExtendedIdentical);
