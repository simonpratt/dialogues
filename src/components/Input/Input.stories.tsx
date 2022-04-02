import React, { useContext, useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import HelperModalsProvider from "../../core/HelperModals.provider";
import HelperModalsContext from "../../core/HelperModals.context";
import { Button, Spacer, Text } from "@dtdot/lego";

export const Standard = () => {
  const { requestInput } = useContext(HelperModalsContext);
  const [lastText, setLastText] = useState<string>();

  const clickHandler = async () => {
    const text = await requestInput(
      "What is your name?",
      "Optional explanatory message goes here"
    );

    setLastText(text);
  };

  return (
    <>
      <Button onClick={clickHandler}>Request Input</Button>
      <Spacer size="2x" />
      {lastText && <Text>Latest input: {lastText}</Text>}
      {lastText === undefined && <Text>Last modal was dismissed</Text>}
    </>
  );
};

export const withoutMessage = () => {
  const { requestInput } = useContext(HelperModalsContext);

  const clickHandler = async () => {
    const text = await requestInput(
      "What is your name?",
    );
  };

  return (
    <>
      <Button onClick={clickHandler}>Request Input</Button>
    </>
  );
};

export default {
  title: "Modals/Input",
  decorators: [
    (Story) => (
      <HelperModalsProvider>
        <Story />
      </HelperModalsProvider>
    ),
  ],
} as Meta;
