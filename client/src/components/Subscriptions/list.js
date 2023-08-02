import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ModalSub from './modal';
import './style.css'


function SubList({ subscriptions, onDeleteSubscription, onEditSubscription }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editSubscription, setEditSubscription] = useState({ subscription: '', amount: '$' });

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditSubscription(subscriptions[index]);
  };

  const handleSaveEdit = () => {
    onEditSubscription(editIndex, editSubscription);
    setEditIndex(null);
  };

  const handleEditSubscriptionChange = (event) => {
    const { name, value } = event.target;
    setEditSubscription((prevEditSubscription) => ({ ...prevEditSubscription, [name]: value }));
  };

  return (
    <ListGroup>
      {subscriptions.map((subscription, index) => (
        <ListGroup.Item  className='custom-font' style={{backgroundColor: 'grey', color: 'black', borderColor: "black", fontWeight: 'bold'}} key={index}>
          {editIndex === index ? (
            <>
              <input
              className='custom-font'
                type="text"
                name="subscription"
                value={editSubscription.subscription}
                onChange={handleEditSubscriptionChange}
              />
              <input
                type="text"
                name="amount"
                value={editSubscription.amount}
                onChange={handleEditSubscriptionChange}
              />
              <a href='#' onClick={handleSaveEdit} style={{ marginRight: '25px', marginLeft: '20px' }}>✔️</a>
              <a href='#' onClick={() => setEditIndex(null)} style={{ marginLeft: '25px' }}>❌</a>
            </>
          ) : (
            <>
              {subscription.subscription} - ${subscription.amount}
              <a href='#' onClick={() => handleEditClick(index)} style={{ marginRight: '5px', marginLeft: '30px', color: 'black' }}>✎</a>
              <a href='#' onClick={() => onDeleteSubscription(index)} style={{ marginLeft: '5px' }}>🗑️</a>
            </>
          )}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default SubList;



// import React from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';

// function SubList({ subscriptions, onDeleteSubscription }) {
//   return (
//     <ListGroup>
//       {subscriptions.map((subscription, index) => (
//         <ListGroup.Item key={index}>
//           {subscription.subscription} - {subscription.amount}
//           <a href='' style={{ marginRight: '25px', marginLeft: '20px' }}>✎</a>
//           <a href='' onClick={() => onDeleteSubscription(index)} style={{ marginLeft: '25x' }}>🗑️</a>
//         </ListGroup.Item>
//       ))}
//     </ListGroup>
//   );
// }

// export default SubList;







