export const Radio = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Radio } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Radio name="basic" value="value-1" defaultChecked />
      <Radio name="basic" value="value-2" />
      <Radio name="basic2" value="value-3" disabled defaultChecked />
      <Radio name="basic2" value="value-4" disabled />
    </Wrapper>
  );
};
`,
  demoName: 'Radio',
}


export const Color = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Radio } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Radio />
    </Wrapper>
  );
};
`,
  demoName: 'Color',
}

export const Size = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Radio } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Radio />
    </Wrapper>
  );
};
`,
  demoName: 'Size',
}

export const Controlled = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Radio } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Radio />
    </Wrapper>
  );
};
`,
  demoName: 'Controlled',
}
