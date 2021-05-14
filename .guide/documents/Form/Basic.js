import React, { useCallback } from 'react';
import { Form } from '@fork-ui/components/core';

const Demo = () => {
  const onChange = useCallback((e) => {
    console.log(e.target);
  }, []);

  return (
    <Form className="w-full">
      <Form.Textbox
        label="Account"
        placeholder="Your account"
        name="account"
        onChange={onChange}
      />
      <Form.Password
        label="Password"
        placeholder="Your password"
        name="password"
        onChange={onChange}
      />
      <Form.Textarea
        label="Comment"
        placeholder="Comment here"
        name="message"
        onChange={onChange}
      />
    </Form>
  );
};

export default Demo;
