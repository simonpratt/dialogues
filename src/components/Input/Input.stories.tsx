import React, { useContext, useState } from 'react';
import { Button, Spacer, Text } from '@dtdot/lego';
import { DialoguesContext, DialoguesProvider } from '../..';

export const Standard = () => {
  const { requestInput } = useContext(DialoguesContext);
  const [lastText, setLastText] = useState<string>();

  const clickHandler = async () => {
    const text = await requestInput('What is your name?', 'Optional explanatory message goes here');

    setLastText(text);
  };

  return (
    <>
      <Button onClick={clickHandler}>Request Input</Button>
      <Spacer size='2x' />
      {lastText && <Text>Latest input: {lastText}</Text>}
      {lastText === undefined && <Text>Last modal was dismissed</Text>}
    </>
  );
};

export const WithoutMessage = () => {
  const { requestInput } = useContext(DialoguesContext);

  const clickHandler = async () => {
    await requestInput('What is your name?');
  };

  return (
    <>
      <Button onClick={clickHandler}>Request Input</Button>
    </>
  );
};

export default {
  title: 'Modals/Input',
  decorators: [
    (Story: any) => (
      <DialoguesProvider>
        <Story />
      </DialoguesProvider>
    ),
  ],
};
