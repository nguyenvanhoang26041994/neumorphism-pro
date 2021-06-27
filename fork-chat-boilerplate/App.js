import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { trim } from 'lodash';
import { withContext as withChatContext} from './fork-chat-store';

import {
  Button,
  Badge,
  Avatar,
  Dialog,
  Textbox,
  Loader,
} from '@fork-ui/core';
import {
  Settings, Plus, Photo, ThumbUp, Moon, Search,
  Phone, Video, AlertCircle, Dots,
  Edit, VideoPlus, Bell, Send, Location,
} from '@fork-ui/icons/lazy';
import {
  AvatarGroup as RoundedAvatarGroup,
  FloatTyping,
  FloatUnread,
} from './core';
import ChatCardList from './components/ChatCardList';
import GroupChannelDetail from './components/GroupChannelDetail';
import MainChatbox from './components/MainChatbox';

import ChatSesstions from './ChatSesstions';
import DarkMode from '@contexts/DarkMode';

import { users } from './fake';

const _users = users.reduce((rs, user) => {
  rs[user.id] = user;
  return rs;
}, {});

const SearchboxWrapper = styled.div`
  position: relative;
  .search-icon {
    position: absolute;
    left: 0;
    top: 50%;
    padding: 3px;
    transform: translate(50%, -50%);
  }
  .search-input {
    border: 0;
    background-color: transparent;
    border-radius: 999px;
    min-height: 40px;
    padding-left: 40px;
    padding-right: 20px;

    &:hover,
    &:focus {
      background-color: var(--btn-bg);
    }
  }
`;
const Searchbox = () => {
  return (
    <SearchboxWrapper className="w-full">
      <div className="search-icon">
        <Search />
      </div>
      <Textbox className="search-input" placeholder="Search..." />
    </SearchboxWrapper>
  );
};

const Wrapper = styled.div`
  --header-height: 50px;
  --nice-spacing: 25px;
  .header-wrapper {
    background-color: var(--bg);
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    height: var(--header-height);
    border-bottom: 1px solid var(--skeleton-color);
  }

  .header__middle {
    flex: 1;
  }

  .body-wrapper {
    height: calc(100vh - var(--header-height));
  }

  .body {
    display: flex;
    height: 100%;
  }

  .header__left,
  .left-section {
    width: 420px;
  }
  .left-section {
    flex-shrink: 0;
    background-color: var(--bg);
    border-right: 1px solid var(--skeleton-color);
  }
  .main {
    flex: 1;
    background-color: var(--bg);
  }
  .header__right,
  .right-section {
    width: 420px;
  }
  .right-section {
    flex-shrink: 0;
    background-color: var(--bg);
    border-left: 1px solid var(--skeleton-color);
  }
`;

const ChatContainer = styled(Dialog)`
  height: 100%;
`;
const ChatHeader = styled(Dialog.Header)`
  height: 80px;
  padding-left: var(--nice-spacing);
  padding-right: var(--nice-spacing);
`;
const ChatBody = styled(Dialog.Body)`
  .chat-sessions {
    margin: 0 auto;
    min-height: 100%;
    padding-left: var(--nice-spacing);
    padding-right: var(--nice-spacing);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
const ChatFooter = styled(Dialog.Footer)`
  padding-left: 25px;
  padding-right: 25px;
`;

const StyledChatInput = styled(Textbox)`
  border-color: transparent;
  border: 0;
  background-color: var(--btn-bg);
  border-radius: 999px;
  resize: none;
  min-height: 45px;
  padding: 0 20px;
  box-sizing: border-box;
`;

const App = () => {
  const { toggleDark } = DarkMode.useContext();
  const [isRightbarOpen, setRightbarOpen] = useState(true);
  const [isShowSending, setIsShowSending] = useState(false);

  const ref = useRef();
  const scrollToBottom = useCallback(() => {
    ref.current && ref.current.scrollTo({
      top: 9999999,
      behavior: 'smooth',
    });
  }, [ref]);

  useEffect(() => {
    scrollToBottom();
  }, [])

  return (
    <Wrapper>
      <div className="header-wrapper">
        <header className="header">
          <div className="header__left"></div>
          <div className="header__middle">
            <Searchbox />
          </div>
          <div className="header__left flex items-center justify-end pl-5 pr-5">
            <Badge.Dot color="var(--green-6)" overlap placement="bottom-end">
              <Avatar size={30} loading="lazy" src={_users['111'].avatar} />
            </Badge.Dot>
            <Button rounded icon={<Moon />} onClick={toggleDark} className="ml-3" />
            <Badge.Counter count={8} overlap placement="top-end" className="ml-3">
              <Button rounded icon={<Bell />}/>
            </Badge.Counter>
            <Button rounded icon={<Settings />} className="ml-3" />
          </div>
        </header>
      </div>
      <div className="body-wrapper">
        <div className="body">
          <div className="left-section">
            <Dialog style={{ height: '100%' }}>
              <Dialog.Header style={{ height: '80px' }}>
                <div className="w-full flex items-center justify-between">
                  <div>
                    <h2 style={{ fontSize: '18px', color: 'var(--heading-color)'}}>Chats</h2>
                  </div>
                  <div>
                    <Button rounded icon={<Dots />} />
                    <Button rounded icon={<VideoPlus />} className="ml-3" />
                    <Button rounded icon={<Edit />} className="ml-3" />
                  </div>
                </div>
              </Dialog.Header>
              <Dialog.Body className="common-scrollbar common-scrollbar--hover p-0">
                <div className="w-full" style={{ height: '100%' }}>
                  <ChatCardList />
                </div>
              </Dialog.Body>
            </Dialog>
          </div>
          <main className="main">
            <ChatContainer>
              <ChatHeader>
                <div className="flex items-center justify-between w-full">
                  <div>
                    <div className="flex items-center">
                      <Badge.Dot color="var(--green-6)" overlap placement="bottom-end">
                        <RoundedAvatarGroup className="">
                          <Avatar loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c11.0.100.100a/p100x100/30742449_1491970024265673_1550576325926846464_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=2oMnvtTy_7wAX-DJr5m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=b8099de9faa431c553b0ef32be399495&oe=60DB688A">OP</Avatar>
                          <Avatar loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/p100x100/180904085_3892238354216551_318542444565664736_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_ohc=MgrLjXsMiXMAX-WWTgL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=6&oh=157a71f6ef6f7cc305f7195d1c82ee10&oe=60DAA837">H</Avatar>
                        </RoundedAvatarGroup>
                      </Badge.Dot>
                      <h1 className="ml-3" style={{ fontSize: '16px', color: 'var(--heading-color)' }}>Hội Bang Cuối Tuần</h1>
                    </div>
                  </div>
                  <div>
                    <Button rounded icon={<Phone />} />
                    <Button rounded icon={<Video />} className="ml-3" />
                    <Button rounded icon={<AlertCircle />} className="ml-3" onClick={() => setRightbarOpen(prev => !prev)} />
                  </div>
                </div>
              </ChatHeader>
              <ChatBody className="common-scrollbar common-scrollbar--hover" ref={ref}>
                <div className="w-full" style={{ maxWidth: '900px', height: '100%', margin: '0 auto' }}>
                  <div data-id="loadMoreTop" className="flex items-center justify-center">
                    <Loader.Spinner className="p-3" />
                  </div>
                  <ChatSesstions className="chat-sessions" />
                  <div data-id="loadMoreBottom" className="flex items-center justify-center">
                    <Loader.Spinner className="p-2" />
                  </div>
                </div>
              </ChatBody>
              <ChatFooter>
                <div className="w-full flex items-center justify-center" style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    top: '-47px',
                    right: 0,
                    left: 'auto',
                  }}>
                    <FloatUnread count={2} onClick={scrollToBottom} />
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '-40px',
                    right: 'auto',
                    left: 0,
                  }}>
                    <FloatTyping className="flex items-center">
                      <Avatar size={25} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
                      <Avatar size={25} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c11.0.100.100a/p100x100/30742449_1491970024265673_1550576325926846464_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=2oMnvtTy_7wAX-DJr5m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=b8099de9faa431c553b0ef32be399495&oe=60DB688A" />
                    </FloatTyping>
                  </div>
                  <MainChatbox scrollToBottom={scrollToBottom} />
                </div>
              </ChatFooter>
            </ChatContainer>
          </main>
          {isRightbarOpen && (
            <div className="right-section">
              <GroupChannelDetail />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default withChatContext(App);
