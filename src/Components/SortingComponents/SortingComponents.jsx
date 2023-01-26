import React from 'react'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { Row } from 'react-bootstrap';



const SortingComponents = () => {
  return (
    <Row> 
   <Form style={{display:"flex",justifyContent:"space-between"}}>
   <Form.Check className="my-0 px-1 align-items-center justify-content-space-between"
    style={{display:"inline-flex"}}
    type="checkbox"
    label = "Show only products on sale"
   />
    <text className="me-2 my-auto ms-auto"> Sort by </text>
<Dropdown className="btn btn-outline-dark px-3 py-0 m-0" style={{display:"inline-flex",border:"2px solid gray"}}>
   
      <Dropdown.Toggle  variant="dark" id="dropdown-basic">
        <new className="mx-4">Best Selling </new>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Lowest Price</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Best Selling</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Highest Rating</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</Form>      
   

    </Row>
  )
}

export default SortingComponents