import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalSub({ addSubscription }) {
  const [show, setShow] = useState(false);
  const [subscriptionAmount, setSubscriptionAmount] = useState('$');
  const [subscriptionName, setSubscriptionName] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAmountChange = (event) => {
    const enteredValue = event.target.value;
    // Use a regular expression to check if the entered value matches the allowed pattern.
    if (/^[0-9$.]*$/.test(enteredValue)) {
      setSubscriptionAmount(enteredValue);
    }
  };

  const handleSubscriptionNameChange = (event) => {
    setSubscriptionName(event.target.value);
  };

  const handleSaveChanges = () => {
    // Add the new subscription to the list in the parent component (Subs.js)
    addSubscription({ subscription: subscriptionName, amount: subscriptionAmount });
    handleClose();
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
              <Form.Control
                type="text"
                placeholder="ex. Netflix, Hulu, etc."
                autoFocus
                value={subscriptionName}
                onChange={handleSubscriptionNameChange}
              />
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
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalSub;




