import React from 'react';
import { Button, ButtonGroup, Modal, Spacer, Text } from '@dtdot/lego';

export interface ConfirmationModalProps {
  heading: string;
  message?: string;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal = ({ heading, message, onClose, onConfirm }: ConfirmationModalProps) => {
  return (
    <Modal onClose={onClose}>
      <Modal.Header header={heading || 'Input Required'} />
      <Modal.Body>
        <Text>{message}</Text>
        <Spacer size='2x' />
        <ButtonGroup alignment='right'>
          <Button variant='secondary' onClick={onClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={onConfirm}>
            Ok
          </Button>
        </ButtonGroup>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmationModal;
