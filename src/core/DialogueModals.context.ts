import { createContext } from 'react';
import { ConfirmationModalOptions } from '../components/Confirmation/Confirmation.modal';
import { InputModalOptions } from '../components/Input/Input.modal';

export interface DialogueModalsContextProps {
  requestConfirmation: (heading: string, message?: string, options?: ConfirmationModalOptions) => Promise<boolean>;
  requestInput: (heading: string, message?: string, options?: InputModalOptions) => Promise<string | undefined>;
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
