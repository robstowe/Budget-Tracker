import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ADD_UTILITY } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

function ModalUtil({ addUtility }) {
  const [show, setShow] = useState(false);
  const [utilityAmount, setUtilityAmount] = useState(0);
  const [utilityName, setUtilityName] = useState('');
  const [addUtil, { error }] = useMutation(ADD_UTILITY);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAmountChange = (event) => {
    const enteredValue = +event.target.value;
    // Use a regular expression to check if the entered value matches the allowed pattern.
    // if (/^[0-9$.]*$/.test(enteredValue)) {
      setUtilityAmount(enteredValue);
    // }
  };

  const handleUtilityNameChange = (event) => {
    setUtilityName(event.target.value);
  };

  const handleSaveChanges = async () => {
    console.log('hello');
    const {data} = await addUtil({
      variables:{
        price: utilityAmount, 
        name: utilityName,
      }
      
    }); console.log(data);
    // Add the new subscription to the list in the parent component (Subs.js)
    addUtility({ utility: data.addUtil.name, amount: data.addUtil.price });
    handleClose();
  };

  return (
    <>
<Button variant="primary" onClick={handleShow}>
        Add Utility
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your New Utility</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Your Utilities</Form.Label>
              <Form.Control
                type="text"
                placeholder="ex. Netflix, Hulu, etc."
                autoFocus
                value={utilityName}
                onChange={handleUtilityNameChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Enter Utility Amount</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                value={utilityAmount}
                onChange={handleAmountChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUtil;
