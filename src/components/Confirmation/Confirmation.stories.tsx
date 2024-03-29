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

export const CustomButtons = () => {
  const { requestConfirmation } = useContext(DialoguesContext);

  const clickHandler = async () => {
    await requestConfirmation('Confirmation Required', 'Optional confirmation message goes here', {
      closeText: 'No',
      confirmText: 'Yes',
    });
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
    (Story: any) => (
      <DialoguesProvider>
        <Story />
      </DialoguesProvider>
    ),
  ],
};
