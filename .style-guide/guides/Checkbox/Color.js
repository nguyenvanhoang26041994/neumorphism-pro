import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Checkbox } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Checkbox color="pink" defaultChecked />
      <Checkbox color="red" defaultChecked />
      <Checkbox color="var(--green)" defaultChecked />
      <Checkbox color="#ff5722" defaultChecked />
      <Checkbox color="#ff5722" disabled defaultChecked />
    </Wrapper>
  );
};