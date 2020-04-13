import React, { useCallback } from 'react';
import {
  Button,
  Avatar,
  Icon,
  helper,
} from '@/components';

const avatarLink = 'https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p320x320/83290506_984513715279336_4057640429858848768_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=4HRhr-vve64AX_Kw3w6&_nc_ht=scontent-hkg3-1.xx&_nc_tp=6&oh=8241a9f1e3a6c8c4494c6534a693a342&oe=5EA4BE84';

const Demo = () => {
  const onOpen = useCallback(() => {
    helper.pushNotification({
      render: (setOpen) => (
        <div className="flex">
          <Avatar
            src={avatarLink}
            name="Hoàng Nguyễn"
            className="mr-3 text-lg"
          />
          <div className="flex flex-col">
            <span>
              <a
                className="text-blue-600 mr-2"
                onClick={() => setOpen(false)}
              >
                Hoàng Nguyễn
              </a>
              send you a friend request
            </span>
            <div className="mt-1 text-gray-600">
              <Icon
                name="globe"
                className="mr-2"
                fontSize="0.85em"
              />
              5 minues ago,
              <i className="ml-2">
                click
                <a
                  className="text-blue-600 mx-2"
                  onClick={() => setOpen(false)}
                >
                  Hoàng Nguyễn
                </a>
                to close
              </i>
            </div>
          </div>
        </div>
      ),
      duration: 10000,
    });
  }, []);

  return (
    <div className="flex">
      <Button onClick={onOpen}>Push Notification</Button>
    </div>
  );
};

export default Demo;

Demo.header = 'CUSTOM';
Demo.href = 'notification-custom';
Demo.code = `import React, { useCallback } from 'react';
import {
  Button,
  Avatar,
  Icon,
  helper,
} from '@/components';

const avatarLink = 'https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p320x320/83290506_984513715279336_4057640429858848768_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=4HRhr-vve64AX_Kw3w6&_nc_ht=scontent-hkg3-1.xx&_nc_tp=6&oh=8241a9f1e3a6c8c4494c6534a693a342&oe=5EA4BE84';

const Demo = () => {
  const onOpen = useCallback(() => {
    helper.pushNotification({
      render: (setOpen) => (
        <div className="flex">
          <Avatar
            src={avatarLink}
            name="Hoàng Nguyễn"
            className="mr-3 text-lg"
          />
          <div className="flex flex-col">
            <span>
              <a
                className="text-blue-600 mr-2"
                onClick={() => setOpen(false)}
              >
                Hoàng Nguyễn
              </a>
              send you a friend request
            </span>
            <div className="mt-1 text-gray-600">
              <Icon
                name="globe"
                className="mr-2"
                fontSize="0.85em"
              />
              5 minues ago,
              <i className="ml-2">
                click
                <a
                  className="text-blue-600 mx-2"
                  onClick={() => setOpen(false)}
                >
                  Hoàng Nguyễn
                </a>
                to close
              </i>
            </div>
          </div>
        </div>
      ),
      duration: 10000,
    });
  }, []);

  return (
    <div className="flex">
      <Button onClick={onOpen}>Push Notification</Button>
    </div>
  );
};

export default Demo;
`;