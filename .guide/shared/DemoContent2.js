import React from 'react';
import { Flex, Skeleton } from '@fork-ui/components/core';

const DemoContent = () => {
  return (
    <Flex col style={{ padding: '0.5 1.5rem' }} span="full" className="fskele-animated">
      <Flex items="center" className="mb-5">
        <Skeleton shape="circle" size="2rem" />
        <Flex col className="ml-5 flex-1">
          <Skeleton shape="p" w="70%" />
          <Skeleton shape="p" w="20%" />
          <Skeleton shape="p" w="40%" />
        </Flex>
      </Flex>
      <Skeleton shape="rect" w="100%" h="200px" />
      <Skeleton shape="rect" w="60%" h="40px" />
      <Skeleton shape="p" w="30%" />
      <Skeleton shape="p" w="40%" />
      <Skeleton shape="p" w="100%" />
      <Flex items="center" className="mt-5">
        <Skeleton shape="rect" w="200px" h="200px" />
        <Flex col className="ml-10 flex-1">
          <Skeleton shape="p" w="70%" />
          <Skeleton shape="p" w="20%" />
          <Skeleton shape="p" w="40%" />
          <Skeleton shape="rect" w="100%" h="100px" />
          <Skeleton shape="p" w="80%" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DemoContent;
