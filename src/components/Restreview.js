import Viewrest from './Viewrest'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';


function Restreview({review}) {
    console.log(review);
    const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant='dark'
      >
    View Comments
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
                {  review.map(item=>(
                    <div>
                        <h5>{item.name}</h5>
                        <p>{item.rating}</p>
                        <p>{item.comments}</p>
                    </div>
                ))}
             
            </Card>
          </div>
        </Collapse>
      </div>
    </>

  )
}

export default Restreview