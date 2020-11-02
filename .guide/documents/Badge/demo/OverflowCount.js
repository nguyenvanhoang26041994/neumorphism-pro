import React from 'react';
import { Badge } from '@@/fork-ui/src/components/core';

import Wrapper from '@@/.guide/shared/Wrapper';
import FancyBox from '@@/.guide/shared/FancyBox';

const Demo = () => {
  return (
    <Wrapper span="2em">
      <Badge.Counter count={999} overflow={50}>
        <FancyBox size="50px" />
      </Badge.Counter>
      <Badge.Counter
        count={999}
        overflow={50}
        renderOverflow={overflow => `More than ${overflow}`}
      >
        <FancyBox size="50px" />
      </Badge.Counter>
    </Wrapper>
  );
};

export default Demo;
