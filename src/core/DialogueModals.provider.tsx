import React, { useState } from 'react';
import ConfirmationModal, {
  ConfirmationModalOptions,
  ConfirmationModalProps,
} from '../components/Confirmation/Confirmation.modal';
import InputModal, { InputModalOptions, InputModalProps } from '../components/Input/Input.modal';
import DialogueModalsContext from './DialogueModals.context';

export interface DialogueModalsProviderProps {
  children: React.ReactNode;
}

const DialogueModalsProvider = ({ children }: DialogueModalsProviderProps) => {
  const [inputModal, setInputModal] = useState<InputModalProps>();
  const [confirmationModal, setConfirmationModal] = useState<ConfirmationModalProps>();

  const requestConfirmation = (
    heading: string,
    message?: string,
    options?: ConfirmationModalOptions,
  ): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
      setConfirmationModal({
        heading,
        message,
        onClose: () => {
          setConfirmationModal(undefined);
          resolve(false);
        },
        onConfirm: () => {
          setConfirmationModal(undefined);
          resolve(true);
        },
        options,
      });
    });
  };

  const requestInput = (
    heading: string,
    message?: string,
    options?: InputModalOptions,
  ): Promise<string | undefined> => {
    return new Promise<string | undefined>((resolve) => {
      setInputModal({
        heading,
        message,
        onClose: () => {
          setInputModal(undefined);
          resolve(undefined);
        },
        onSubmit: (val: string) => {
          setInputModal(undefined);
          resolve(val);
        },
        options,
      });
    });
  };

  return (
    <>
      <DialogueModalsContext.Provider value={{ requestInput, requestConfirmation }}>
        {children}
      </DialogueModalsContext.Provider>

      {inputModal && (
        <InputModal
          heading={inputModal.heading}
          message={inputModal.message}
          onClose={inputModal.onClose}
          onSubmit={inputModal.onSubmit}
          options={inputModal.options}
        />
      )}

      {confirmationModal && (
        <ConfirmationModal
          heading={confirmationModal.heading}
          message={confirmationModal.message}
          onClose={confirmationModal.onClose}
          onConfirm={confirmationModal.onConfirm}
          options={confirmationModal.options}
        />
      )}
    </>
  );
};

export default DialogueModalsProvider;
