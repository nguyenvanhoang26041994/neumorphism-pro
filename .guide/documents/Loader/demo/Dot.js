import React from 'react';
import { Loader } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Loader.Dot className="mr-10" />
      <Loader.Dot color="red" className="mr-10" />
      <Loader.Dot size="2rem" />
    </div>
  );
};

export default Demo;