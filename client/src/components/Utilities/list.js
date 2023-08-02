import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ModalUtil from './modal';


function UtilList({ utilities, onDeleteUtility, onEditUtility }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editUtility, setEditUtility] = useState({ utility: '', amount: '$' });

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditUtility(utilities[index]);
  };

  const handleSaveEdit = () => {
    onEditUtility(editIndex, editUtility);
    setEditIndex(null);
  };

  const handleEditUtilityChange = (event) => {
    const { name, value } = event.target;
    setEditUtility((prevEditUtility) => ({ ...prevEditUtility, [name]: value }));
  };

  return (
    <ListGroup>
      {utilities.map((utility, index) => (
        <ListGroup.Item style={{backgroundColor: 'grey', color: 'black', borderColor: "black"}} key={index}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                name="utility"
                value={editUtility.utility}
                onChange={handleEditUtilityChange}
              />
              <input
                type="text"
                name="amount"
                value={editUtility.amount}
                onChange={handleEditUtilityChange}
              />
              <a href='#' onClick={handleSaveEdit} style={{ marginRight: '25px', marginLeft: '20px' }}>✔️</a>
              <a href='#' onClick={() => setEditIndex(null)} style={{ marginLeft: '25px' }}>❌</a>
            </>
          ) : (
            <>
              {utility.utility} - {utility.amount}
              <a href='#' onClick={() => handleEditClick(index)} style={{ marginRight: '5px', marginLeft: '30px', color: 'black' }}>✎</a>
              <a href='#' onClick={() => onDeleteUtility(index)} style={{ marginLeft: '5px'}}>🗑️</a>
            </>
          )}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default UtilList;