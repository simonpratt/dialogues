import React from 'react';
import { Button, ButtonGroup, Modal, Spacer, Text } from '@dtdot/lego';

export interface ConfirmationModalOptions {
  closeText?: string;
  closeVariant?: 'primary' | 'secondary' | 'tertiary';
  confirmText?: string;
  confirmVariant?: 'primary' | 'secondary' | 'tertiary';
}

export interface ConfirmationModalProps {
  heading: string;
  message?: string;
  onClose: () => void;
  onConfirm: () => void;
  options?: ConfirmationModalOptions;
}

const ConfirmationModal = ({ heading, message, onClose, onConfirm, options }: ConfirmationModalProps) => {
  return (
    <Modal onClose={onClose} data-testid='modal-confirmation'>
      <Modal.Header header={heading || 'Confirmation Required'} />
      <Modal.Body>
        <Text data-testid='text-confirmation-help'>{message}</Text>
        <Spacer size='2x' />
        <ButtonGroup alignment='right'>
          <Button variant={options?.closeVariant || 'secondary'} onClick={onClose} data-testid='button-cancel'>
            {options?.closeText || 'Cancel'}
          </Button>
          <Button variant={options?.confirmVariant || 'primary'} onClick={onConfirm} data-testid='button-confirm'>
            {options?.confirmText || 'Ok'}
          </Button>
        </ButtonGroup>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmationModal;
