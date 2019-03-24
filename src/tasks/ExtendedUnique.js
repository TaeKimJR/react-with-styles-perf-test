import React from 'react';
import { withStyles } from 'react-with-styles';
import UnstyledComponent from './common/UnstyledComponent';
import createTask from './common/createTask';

const ExtendedUnique = () => {
  const StyledComponent = withStyles(
    () => ({
      container: {
        color: "#"+((1<<24)*Math.random()|0).toString(16),
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
      color: "#"+((1<<24)*Math.random()|0).toString(16),
    }
  }));

  return <ExtendedStyledComponent />
};

export default createTask('ExtendedUnique', ExtendedUnique);
