import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalSub() {
  const [show, setShow] = useState(false);
  const [subscriptionAmount, setSubscriptionAmount] = useState('$');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAmountChange = (event) => {
    const enteredValue = event.target.value;
    // Use a regular expression to check if the entered value matches the allowed pattern.
    if (/^[0-9$.]*$/.test(enteredValue)) {
      setSubscriptionAmount(enteredValue);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Subscription
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your New Subscription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Your Subscription</Form.Label>
              <Form.Control type="text" placeholder="ex. Netflix, Hulu, etc." autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Enter Subscription Amount</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                value={subscriptionAmount}
                onChange={handleAmountChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalSub;
