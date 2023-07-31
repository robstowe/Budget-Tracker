import ListGroup from 'react-bootstrap/ListGroup';

function SubList() {
  return (
    <ListGroup>
      <ListGroup.Item >Cras justo odio<a href='' style={{ marginRight: '25px', marginLeft: '20px' }}>✎</a>
        <a href='' style={{ marginLeft: '25x' }}>🗑️</a></ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in<a href='' style={{ marginRight: '25px', marginLeft: '20px' }}>✎</a>
        <a href='' style={{ marginLeft: '25x' }}>🗑️</a></ListGroup.Item>
      <ListGroup.Item>Morbi leo risus<a href='' style={{ marginRight: '25px', marginLeft: '20px' }}>✎</a>
        <a href='' style={{ marginLeft: '25x' }}>🗑️</a></ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac<a href='' style={{ marginRight: '25px', marginLeft: '20px' }}>✎</a>
        <a href='' style={{ marginLeft: '25x' }}>🗑️</a></ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros<a href='' style={{ marginRight: '25px', marginLeft: '20px' }}>✎</a>
        <a href='' style={{ marginLeft: '25x' }}>🗑️</a></ListGroup.Item>
    </ListGroup>
  );
}

export default SubList;