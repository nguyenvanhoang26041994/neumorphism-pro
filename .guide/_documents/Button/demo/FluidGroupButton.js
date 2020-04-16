import React from 'react';
import { Button, ButtonGroup } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <ButtonGroup className="mr-2" fluid>
      <Button icon="power" />
      <Button icon="message" />
      <Button icon="bell" />
    </ButtonGroup>
  );
};

export default Demo;
Demo.header = 'FLUID GROUP BUTTON';
Demo.anchorTitle = 'Fluid group button';
Demo.href = 'button-fluid-group-button';

Demo.code = `import React from 'react';
import { Button, ButtonGroup } from 'rc-neumorphism/core';

const Demo = () => {
  return (
    <ButtonGroup className="mr-2" fluid>
      <Button icon="power" />
      <Button icon="message" />
      <Button icon="bell" />
    </ButtonGroup>
  );
};

export default Demo;
`;
