import React from 'react';
import { Wrapper, ColumnWrapper,DemoContentV2 } from '@style-guide/components';
import { PureAlert } from '@fork-ui/core';

export default () => {
  return (
    <ColumnWrapper span="20px">
      <Wrapper span="20px">
        <PureAlert type="info" style={{ boxShadow: 'var(--overlay--shadow)' }}>
          <PureAlert.Header>
            INFO
            <PureAlert.Closer />
          </PureAlert.Header>
          <PureAlert.Body>
            <DemoContentV2 />
          </PureAlert.Body>
        </PureAlert>
        <PureAlert type="success" style={{ boxShadow: 'var(--overlay--shadow)' }}>
          <PureAlert.Header>
            SUCCESS
            <PureAlert.Closer />
          </PureAlert.Header>
          <PureAlert.Body>
            <DemoContentV2 />
          </PureAlert.Body>
        </PureAlert>
      </Wrapper>
      <Wrapper span="20px">
        <PureAlert type="warning" style={{ boxShadow: 'var(--overlay--shadow)' }}>
          <PureAlert.Header>
            WARNING
            <PureAlert.Closer />
          </PureAlert.Header>
          <PureAlert.Body>
            <DemoContentV2 />
          </PureAlert.Body>
        </PureAlert>
        <PureAlert type="error" style={{ boxShadow: 'var(--overlay--shadow)' }}>
          <PureAlert.Header>
            ERROR
            <PureAlert.Closer />
          </PureAlert.Header>
          <PureAlert.Body>
            <DemoContentV2 />
          </PureAlert.Body>
        </PureAlert>
      </Wrapper>
    </ColumnWrapper>
  );
};