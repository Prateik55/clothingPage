
import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav  from "react-bootstrap/Nav"
import {ArrowRight} from "react-bootstrap-icons"



const OfferRibbon = () => {
  return (
    <Navbar 
    bg="dark"
    variant="light"
    className="py-0">
    <Nav className="mx-auto">
    <Navbar.Text className="text-light"> Free Delivery on Orders Above Rs 1000. DON'T MISS <a href="#" className=" mx-lg-4 mx-0 text-danger text-decoration-none "
    > SHOP NOW <ArrowRight className="text-white"/> </a></Navbar.Text>


    </Nav>
    </Navbar>
  )
}

export default OfferRibbon;