import { Meta } from '@storybook/react/types-6-0';
import React, { useContext, useState } from 'react';
import { Button, Spacer, Text } from '@dtdot/lego';
import { DialoguesContext, DialoguesProvider } from '../..';

export const Standard = () => {
  const { requestConfirmation } = useContext(DialoguesContext);
  const [lastAction, setLastAction] = useState<boolean>();

  const clickHandler = async () => {
    const confirmed = await requestConfirmation('Confirmation Required', 'Optional confirmation message goes here');

    setLastAction(confirmed);
  };

  return (
    <>
      <Button onClick={clickHandler}>Request Confirmation</Button>
      <Spacer size='2x' />
      {lastAction === false && <Text>Modal was dismissed</Text>}
      {lastAction === true && <Text>Modal was confirmed</Text>}
    </>
  );
};

export const WithoutMessage = () => {
  const { requestConfirmation } = useContext(DialoguesContext);

  const clickHandler = async () => {
    await requestConfirmation('Confirmation Required');
  };

  return (
    <>
      <Button onClick={clickHandler}>Request Confirmation</Button>
    </>
  );
};

export default {
  title: 'Modals/Confirmation',
  decorators: [
    (Story) => (
      <DialoguesProvider>
        <Story />
      </DialoguesProvider>
    ),
  ],
} as Meta;
