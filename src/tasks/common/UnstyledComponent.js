import React from 'react';

const UnstyledComponent = ({ css, styles }) => (
  <div {...css(styles.container)}>Unstyled Component</div>
);

export default UnstyledComponent;
