import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Radio } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Radio name="custom" color="pink" value="value-1" defaultChecked />
      <Radio name="custom" color="red" value="value-2" />
      <Radio name="custom" color="var(--green-6)" value="value-3" />
      <Radio name="custom" color="#ff5722" value="value-4" />
      <Radio
        name="custom2"
        color="#ff5722"
        disabled
        value="value-5"
        defaultChecked
      />
    </Wrapper>
  );
};
