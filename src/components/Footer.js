import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <div>
        <Card className="text-center">
    <Card.Header>Address</Card.Header>
    <Card.Body>
      <Card.Title>Kochi</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">Copyright @ 2023 Tonico cafe.All rights Reserved</Card.Footer>
  </Card>
  </div>
  )
}

export default Footer