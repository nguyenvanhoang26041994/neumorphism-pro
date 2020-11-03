import React from 'react';
import { Badge, Avatar } from '@@/fork-ui/src/components/core';
import { Stars } from '@@/fork-ui/src/components/icons';
import Wrapper from '@@/.guide/shared/Wrapper';
import FancyBox from '@@/.guide/shared/FancyBox';

const PureBadge = Badge.PureBadge;

const Demo = () => {
  return (
    <Wrapper span="2rem">
      <PureBadge
        overlap
        bottomRight
        badge={(
          <Avatar
            style={{ border: '2px solid var(--bg)' }}
            className="fbadge-ui"
            color="var(--primary)"
            size="0.5em"
          >
            HG
          </Avatar>
        )}
      >
        <FancyBox circle size="50px" />
      </PureBadge>
      <PureBadge
        topRight
        badge={<Stars className="fbadge-ui" color="var(--primary)" />}
      >
        <FancyBox size="50px" />
      </PureBadge>
    </Wrapper>
  );
};

export default Demo;