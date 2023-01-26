import React from 'react'
import { Nav, Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Facebook, Instagram, Youtube, Twitter, Pinterest } from 'react-bootstrap-icons'


const FooterNavSectionOne = () => {
  return (
    <Col className="flex-column"
    lg={3}> 
        <h6 className="text-light text-left text-nowrap text-capitalize"
        style={{paddingInlineEnd:"6rem"}}> 
        sign Up today and Get </h6>
        <h6
        style={{paddingInlineEnd:"6rem"}}
        className="text-light text-left text-nowrap text-capitalize"> 
        $5 off on your first order. </h6>

        <Form 
            className="d-flex my-4">
            <Form.Control
            type="email"
            placeholder="Enter Your e-mail"
            className="me-2"
            aria-label="email entry space"
            />
        </Form>
        
        <Nav> 
        <a
        className="btn btn-link btn-floating btn-lg text-white my-1  me-2 p-0"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        > <i ><Facebook/> </i>
        </a> 

        <a
        className="btn btn-link btn-floating btn-lg text-white mx-2  my-1 p-0"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        > <i><Instagram/> </i>
        </a> 

        <a
        className="btn btn-link btn-floating btn-lg text-white mx-2 my-1 p-0"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        > <i ><Youtube/> </i>
        </a> 

        <a
        className="btn btn-link btn-floating btn-lg text-white mx-2 my-1 p-0"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        > <i ><Twitter/> </i>
        </a> 

        <a
        className="btn btn-link btn-floating btn-lg text-white mx-2 my-1 p-0"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        > <i ><Pinterest/> </i>
        </a> 

      
      </Nav>   



    </Col>
  )
}

export default FooterNavSectionOne