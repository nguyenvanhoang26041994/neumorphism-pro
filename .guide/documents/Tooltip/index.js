import React from 'react';
import Codebox from '../../Codebox';

import Basic from './Basic';
import DefaultVisible from './DefaultVisible';
import Placement from './Placement';
import AbsoluteTooltip from './AbsoluteTooltip';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ AbsoluteTooltip } defaultShowCode />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Placement } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ DefaultVisible } />
        </div>
      </div>
    </div>
  );
};
