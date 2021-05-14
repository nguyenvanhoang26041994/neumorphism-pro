import React from 'react';
import {
  Collapse,
  Badge,
  Flex
} from '@fork-ui/components/core';
import PlaneDeparture from '@fork-ui/components/icons/all/PlaneDeparture';
import Share from '@fork-ui/components/icons/all/Share';
import Rotate2 from '@fork-ui/components/icons/all/Rotate2';
import DemoContent from '../../shared/DemoContent';

const Demo = () => {
  const [{ isActive, onChange }] = Collapse.useCollapse({
    activePanels: ['panel-1'],
  });

  return (
    <Flex
      col
      span="full"
      className="p-5"
      style={{
        backgroundColor: 'var(--body-bg)',
        borderRadius: 'var(--border-radius)',
      }}
    >
      <Collapse>
        <Collapse.Panel
          title={(
            <span className="flex">
              <Share className="mr-2" />NORMAL PANEL
            </span>
          )}
          value="panel-1"
          active={isActive('panel-1')}
          onClick={() => onChange('panel-1')}
        >
          <DemoContent />
        </Collapse.Panel>
        <Collapse.Panel 
          fresh
          title={(
            <span className="flex">
              <Rotate2 className="mr-2" />FRESH PANEL
            </span>
          )}
          value="panel-2"
          active={isActive('panel-2')}
          onClick={() => onChange('panel-2')}
        >
          <DemoContent />
        </Collapse.Panel>
        <Collapse.Panel
          title={(
            <span className="flex">
              <PlaneDeparture className="mr-2" />DISABLED PANEL
            </span>
          )}
          disabled
          value="panel-3"
          active={isActive('panel-3')}
          onClick={() => onChange('panel-3')}
        >
          <DemoContent />
        </Collapse.Panel>
      </Collapse>
    </Flex>
  );
};

export default Demo;
