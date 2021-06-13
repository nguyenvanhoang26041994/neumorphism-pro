import React from 'react';
import { DemoBox } from '@style-guide/components';

import LazyIcon from './LazyIcon';
import Icon from './Icon';

import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.Icon.demoName} code={allCode.Icon.code}>
        <Icon />
      </DemoBox>
      <LazyIcon />
    </div>
  );
};