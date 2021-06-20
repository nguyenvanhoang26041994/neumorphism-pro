import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Radio } from '@fork-ui/core';

export default () => {
  const [{ value, onChange }] = Radio.useRadioGroup('value-2');

  return (
    <Wrapper>
      <Radio
        value="value-1"
        checked={'value-1' === value}
        onChange={onChange}
      />
      <Radio
        value="value-2"
        checked={'value-2' === value}
        onChange={onChange}
      />
      <Radio
        value="value-3"
        checked={'value-3' === value}
        onChange={onChange}
      />
    </Wrapper>
  );
};
