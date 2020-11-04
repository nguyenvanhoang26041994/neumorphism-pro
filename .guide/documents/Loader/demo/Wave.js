import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Loader } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper span="2em">
      <Loader.Dots wave />
      <Loader.Dots wave color="var(--red)" />
      <Loader.Dots wave color="var(--green)" />
      <Loader.Dots wave color="pink" size="2em" />
    </Wrapper>
  );
};

export default Demo;
