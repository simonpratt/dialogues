import React, { useState } from 'react';
import { Button, ButtonGroup, ControlGroup, Form, Input, Modal, Text } from '@dtdot/lego';

export interface InputModalOptions {
  closeText?: string;
  closeVariant?: 'primary' | 'secondary' | 'tertiary';
  confirmText?: string;
  confirmVariant?: 'primary' | 'secondary' | 'tertiary';
}

export interface InputModalProps {
  heading: string;
  message?: string;
  onClose: () => void;
  onSubmit: (val: string) => void;
  options?: InputModalOptions;
}

const InputModal = ({ heading, message, onClose, onSubmit, options }: InputModalProps) => {
  const [value, setValue] = useState({ name: '' });

  const _onSubmitClicked = () => {
    onSubmit(value.name);
  };

  return (
    <Modal onClose={onClose} data-testid='modal-input'>
      <Modal.Header header={heading || 'Input Required'} />
      <Modal.Body>
        <Form value={value} onChange={setValue} onSubmit={_onSubmitClicked}>
          <ControlGroup variation='submission'>
            {message && <Text data-testid='text-input-help'>{message}</Text>}
            <Input autoFocus name='name' data-testid='button-input' />
            <ButtonGroup alignment='right'>
              <Button variant={options?.closeVariant || 'secondary'} onClick={onClose} data-testid='button-cancel'>
                {options?.closeText || 'Cancel'}
              </Button>
              <Button variant={options?.confirmVariant || 'primary'} type='submit' data-testid='button-confirm'>
                {options?.confirmText || 'Ok'}
              </Button>
            </ButtonGroup>
          </ControlGroup>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default InputModal;
