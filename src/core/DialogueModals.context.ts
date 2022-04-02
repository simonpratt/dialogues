import { createContext } from 'react';

export interface DialogueModalsContextProps {
  requestConfirmation: (heading: string, message?: string) => Promise<boolean>;
  requestInput: (heading: string, message?: string) => Promise<string | undefined>;
}

const DialogueModalsContext = createContext<DialogueModalsContextProps>({
  // eslint-disable-next-line
  requestConfirmation: (heading: string) => {
    throw new Error('ERROR: requestConfirmation function must be bound in a context');
  },
  // eslint-disable-next-line
  requestInput: (heading: string) => {
    throw new Error('ERROR: requestInput function must be bound in a context');
  },
});

export default DialogueModalsContext;
