import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function SubList({ subscriptions }) {
  return (
    <ListGroup>
      {subscriptions.map((subscription, index) => (
        <ListGroup.Item key={index}>
          {subscription.subscription} - {subscription.amount}
          <a href='' style={{ marginRight: '25px', marginLeft: '20px' }}>✎</a>
          <a href='' style={{ marginLeft: '25px' }}>🗑️</a>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default SubList;



