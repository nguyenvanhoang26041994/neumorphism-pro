import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import { NoticeNotification, Avatar } from '@fork-ui/core';
import { Video } from '@fork-ui/icons/lazy';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '@fork-guide/staff';

const StyledNotification = styled(NoticeNotification)`
  width: 400px;
  box-shadow: var(--popover-box-shadow);

  &:before {
    background-color: var(--green-6);
  }

  .fbadge-avatar {
    .fbadge-ui {
      background-color: var(--red-6);
    }
  }
`;
export default () => {
  return (
    <Wrapper>
      <StyledNotification hasDot>
        <NoticeNotification.BadgeAvatar
          className="mr-5"
          badge={<Video />}
        >
          <Avatar src={avatarLink2} size={55} />
        </NoticeNotification.BadgeAvatar>
        <div>
          <b>Hoàng Nguyễn</b> and <b>Minh Nguyễn</b>
          <span> added to their stories. You can reply or react them.</span>
          <br />
          <small style={{ color: 'var(--primary)' }}>5 hours ago</small>
        </div>
      </StyledNotification>
    </Wrapper>
  );
};
