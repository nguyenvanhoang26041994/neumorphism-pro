import React, { useCallback, useState } from 'react';
import { Select } from '@fork-ui/select';
import { find } from 'lodash';

const options = [
  {
    key: 'vn',
    name: 'Vietname',
    currency: 'VND'
  },
  {
    key: 'us',
    name: 'United State',
    currency: 'USD'
  },
  {
    key: 'uk',
    name: 'United Kingdom',
    currency: 'GBP'
  },
  {
    key: 'disabled',
    name: 'Disabled Option',
    currency: 'Unknown'
  }
];

export default () => {
  // UnControlled Select Component by using defaultSelected
  return (
    <Select defaultSelected={() => Select.getDefaultSelected('us', options)}>
      {options.map((option) => (
        <Select.Option
          key={option.key}
          value={option}
          disabled={option.key === 'disabled' }
        >
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
};
