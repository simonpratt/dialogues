import { Button, ButtonGroup, ControlGroup, Form, Input, Modal, Text } from '@dtdot/lego';
import React, { useState } from 'react';

export interface InputModalProps {
  heading: string;
  message?: string;
  onClose: () => void;
  onSubmit: (val: string) => void;
}

const InputModal = ({ heading, message, onClose, onSubmit }: InputModalProps) => {
  const [value, setValue] = useState({ name: '' });

  const _onSubmitClicked = () => {
    onSubmit(value.name);
  };

  return (
    <Modal onClose={onClose}>
      <Modal.Header header={heading || 'Input Required'} />
      <Modal.Body>
        <Form value={value} onChange={setValue} onSubmit={_onSubmitClicked}>
          <ControlGroup variation='submission'>
            {message && <Text>{message}</Text>}
            <Input autoFocus name='name' />
            <ButtonGroup alignment='right'>
              <Button variant='secondary' onClick={onClose}>
                Cancel
              </Button>
              <Button type='submit'>Ok</Button>
            </ButtonGroup>
          </ControlGroup>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default InputModal;
