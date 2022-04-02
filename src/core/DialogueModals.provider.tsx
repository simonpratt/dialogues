import React, { useState } from 'react';
import DialogueModalsContext from './DialogueModals.context';

import ConfirmationModal, { ConfirmationModalProps } from '../components/Confirmation/Confirmation.modal';
import InputModal, { InputModalProps } from '../components/Input/Input.modal';

export interface DialogueModalsProviderProps {
  children: React.ReactNode;
}

const DialogueModalsProvider = ({ children }: DialogueModalsProviderProps) => {
  const [inputModal, setInputModal] = useState<InputModalProps>();
  const [confirmationModal, setConfirmationModal] = useState<ConfirmationModalProps>();

  const requestConfirmation = (heading: string, message?: string): Promise<boolean> => {
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
      });
    });
  };

  const requestInput = (heading: string, message?: string): Promise<string | undefined> => {
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
        />
      )}

      {confirmationModal && (
        <ConfirmationModal
          heading={confirmationModal.heading}
          message={confirmationModal.message}
          onClose={confirmationModal.onClose}
          onConfirm={confirmationModal.onConfirm}
        />
      )}
    </>
  );
};

export default DialogueModalsProvider;
