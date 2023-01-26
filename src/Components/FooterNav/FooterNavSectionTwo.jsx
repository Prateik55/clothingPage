import React from 'react'
import { Nav } from 'react-bootstrap'
import { Phone, Mailbox, Map} from 'react-bootstrap-icons'
import {Col} from 'react-bootstrap'

const FooterNavSectionTwo = () => {
  return (
    <Col lg={9} className= " flex-row mx-5"
    style={{display:"flex", justifyContent:"space-between"}}> 
      
      <Nav className="flex-column text-white px-5 ">
          <h6 className="mb-3"> Collection </h6>

          <a className="text-light text-decoration-none nowrap small my-1" href="#"> Clothing </a>

          <a className="text-light text-decoration-none nowrap small my-1" href="#"> Tops </a>

          <a className="text-light text-decoration-none nowrap small my-1" href="#"> Sweater </a>

          <a className="text-light text-decoration-none nowrap small my-1" href="#"> Dresses </a>

          <a className="text-light text-decoration-none nowrap small my-1" href="#"> Shops </a> 
      </Nav>

      <Nav className="flex-column text-white px-5 ">
          <h6 className="mb-3"> Company </h6>

          <a className="text-light text-decoration-none text-nowrap small my-1" href="#"> Career at Toppers</a>

          <a className="text-light text-decoration-none text-nowrap small my-1" href="#"> About Toppers </a>

          <a className="text-light text-decoration-none text-nowrap small my-1" href="#"> Contact Us </a>

          <a className="text-light text-decoration-none text-nowrap small my-1" href="#"> Gift Cards</a>

          <a className="text-light text-decoration-none text-nowrap small my-1" href="#"> Blog </a> 
      </Nav>

      <Nav className="flex-column text-white px-5">
          <h6 className="mb-3"> Need Help </h6>

          <a className="text-light text-decoration-none text-nowrap small my-1" href="#"> Order Status</a>

          <a className="text-light text-decoration-none text-nowrap small my-1" href="#"> Shipping & Delivery </a>

          <a className="text-light text-decoration-none text-nowrap small my-1" href="#"> FAQ & Helps</a>

          <a className="text-light text-decoration-none text-nowrap small my-1" href="#"> Terms and Conditions </a>

          <a className="text-light text-decoration-none text-nowrap small my-1" href="#"> Legal & Privacy </a> 
      </Nav>
      
      <Nav className="flex-column text-white px-5">
          <h6 className="mb-2">Executive Services</h6> 

            <a className="flex justify-content-start text-white  text-decoration-none px-0 small text-secondary my-2"
            href="tel:+16668888"
            role="button"
            data-mdb-ripple-color="dark"> 
            <i > <Phone/> </i> 
            Call us at +1 666 8888
            </a> 

            <a className="flex justify-content-start text-white  text-decoration-none px-0 small text-secondary my-2"
            href="mail:xyz@xyx.in"
            role="button"
            data-mdb-ripple-color="dark"> 
            <i > <Mailbox/> </i> 
            send us an email
            </a> 

            <a className="flex justify-content-start text-white  text-decoration-none px-0 small text-secondary my-2"
            href="#"
            role="button"
            data-mdb-ripple-color="dark"> 
            <i > <Map/> </i> 
            see our stores
            </a> 




          
      </Nav>
    </Col>
  )
}

export default FooterNavSectionTwo