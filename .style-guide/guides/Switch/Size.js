import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Switch } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Switch defaultChecked />
      <Switch defaultChecked size={35} />
      <Switch defaultChecked size={50}/>
    </Wrapper>
  );
};
