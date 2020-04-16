import React from 'react';
import { Timeline, Icon } from '@/rc-neumorphism/core';

const NotificationBox = ({ requester, time }) => {
  return (
    <div
      className="flex flex-col px-3 pb-3 mb-10 rounded-lg"
    >
      <span>
        <a className="text-blue-600">{requester} </a>
        send you a friend request
      </span>
      <div className="mt-1 text-gray-600">
        <Icon
          name="globe"
          className="mr-2" fontSize="0.85em"
        />
        {time}
      </div>
    </div>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Timeline className="mb-5" right>
        <Timeline.Item>
          <NotificationBox
            requester="Sơn Lê"
            time="5 day ago"
          />
        </Timeline.Item>
        <Timeline.Item>
          <NotificationBox
            requester="Hoàng Nguyễn"
            time="4 day ago"
          />
        </Timeline.Item>
        <Timeline.Item>
          <NotificationBox
            requester="Seventeen"
            time="3 day ago"
          />
        </Timeline.Item>
        <Timeline.Item>
          <NotificationBox
            requester="Alan Walker"
            time="2 day ago"
          />
        </Timeline.Item>
        <Timeline.Item>
          <NotificationBox
            requester="Hoàng Nguyễn"
            time="1 day ago"
          />
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Demo;
Demo.header = 'RIGHT';
Demo.anchorTitle = 'Right';
Demo.href = 'timeline-right';

Demo.code = `import React from 'react';
import { Timeline, Icon } from 'rc-neumorphism/core';

const NotificationBox = ({ requester, time }) => {
  return (
    <div
      className="flex flex-col px-3 pb-3 mb-10 rounded-lg"
    >
      <span>
        <a className="text-blue-600">{requester} </a>
        send you a friend request
      </span>
      <div className="mt-1 text-gray-600">
        <Icon
          name="globe"
          className="mr-2" fontSize="0.85em"
        />
        {time}
      </div>
    </div>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Timeline className="mb-5" right>
        <Timeline.Item>
          <NotificationBox
            requester="Sơn Lê"
            time="5 day ago"
          />
        </Timeline.Item>
        <Timeline.Item>
          <NotificationBox
            requester="Hoàng Nguyễn"
            time="4 day ago"
          />
        </Timeline.Item>
        <Timeline.Item>
          <NotificationBox
            requester="Seventeen"
            time="3 day ago"
          />
        </Timeline.Item>
        <Timeline.Item>
          <NotificationBox
            requester="Alan Walker"
            time="2 day ago"
          />
        </Timeline.Item>
        <Timeline.Item>
          <NotificationBox
            requester="Hoàng Nguyễn"
            time="1 day ago"
          />
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Demo;
`;
