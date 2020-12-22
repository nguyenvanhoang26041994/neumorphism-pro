import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Button, ButtonGroup } from '@fork-ui/components/core';
import { Power, Message, Bell } from '@fork-ui/components/icons';

const Demo = () => {
  return (
    <Wrapper>
      <ButtonGroup>
        <Button icon={<Power />} />
        <Button icon={<Message />} />
        <Button icon={<Bell />} />
      </ButtonGroup>
      <ButtonGroup>
        <Button primary icon={<Power />} />
        <Button primary icon={<Message />} />
        <Button primary icon={<Bell />} />
      </ButtonGroup>
      <ButtonGroup danger>
        <Button primary icon={<Power />} />
        <Button danger icon={<Message />} />
        <Button icon={<Bell />} />
      </ButtonGroup>
    </Wrapper>
  );
};

export default Demo;
