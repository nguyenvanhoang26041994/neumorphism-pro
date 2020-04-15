import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Collection from './demo/Collection';
import Basic from './demo/Basic';
import Color from './demo/Color';
import Size from './demo/Size';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Collection } />
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ Color } />
         <Codebox className="mb-1" Component={ Size } />
      </div>
      <div className="pl-1" style={ { flexBasis: '200px' } }>
        <Anchor
          top={75}
          style={ {
            backgroundColor: 'var(--rc-color--300)',
            height: 'calc(100vh - 75px',
            borderRadius: '0.5rem',
          } }
        >
           <Anchor.Link key={`#${ Collection.href}` } title={ Collection.anchorTitle } />
           <Anchor.Link key={`#${ Basic.href}` } title={ Basic.anchorTitle } />
           <Anchor.Link key={`#${ Color.href}` } title={ Color.anchorTitle } />
           <Anchor.Link key={`#${ Size.href}` } title={ Size.anchorTitle } />
        </Anchor>
      </div>
    </div>
  );
};
