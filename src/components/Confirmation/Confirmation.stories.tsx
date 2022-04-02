import React, { useContext, useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import HelperModalsProvider from "../../core/HelperModals.provider";
import HelperModalsContext from "../../core/HelperModals.context";
import { Button, Spacer, Text } from "@dtdot/lego";

export const Standard = () => {
  const { requestConfirmation } = useContext(HelperModalsContext);
  const [lastAction, setLastAction] = useState<boolean>();

  const clickHandler = async () => {
    const confirmed = await requestConfirmation(
      "Confirmation Required",
      "Optional confirmation message goes here"
    );

    setLastAction(confirmed);
  };

  return (
    <>
      <Button onClick={clickHandler}>Request Confirmation</Button>
      <Spacer size="2x" />
      {lastAction === false && <Text>Modal was dismissed</Text>}
      {lastAction === true && <Text>Modal was confirmed</Text>}
    </>
  );
};

export const withoutMessage = () => {
  const { requestConfirmation } = useContext(HelperModalsContext);

  const clickHandler = async () => {
    const confirmed = await requestConfirmation(
      "Confirmation Required",
    );
  };

  return (
    <>
      <Button onClick={clickHandler}>Request Confirmation</Button>
    </>
  );
};

export default {
  title: "Modals/Confirmation",
  decorators: [
    (Story) => (
      <HelperModalsProvider>
        <Story />
      </HelperModalsProvider>
    ),
  ],
} as Meta;
