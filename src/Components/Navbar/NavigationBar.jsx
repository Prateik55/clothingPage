import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Search,Heart,Cart2,Person} from "react-bootstrap-icons"



import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" >
      <Container fluid my-2>
        <Navbar.Brand href="#home">Toppers United</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <div className="w-100" style={{flexFlow:"column"}}>
        <Nav className= "my-0 mx-0 "  id="nav-page-units" >
         <NavDropdown title="English"  > 
             <NavDropdown.Item>English</NavDropdown.Item>
             <NavDropdown.Item>Hindi</NavDropdown.Item>
         </NavDropdown>
         <NavDropdown title="USD" > 
         <NavDropdown.Item>EUR</NavDropdown.Item>
         <NavDropdown.Item>RUPEE</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        


        <Nav className="me-0 my-0 py-md-auto mb-lg-0 flex-lg-row"
        variant="dark"
        navbarScroll
        
         >
          <Nav.Link href="#action1" className="ms-lg-0 mx-lg-3">Home</Nav.Link>
          <Nav.Link href="#action2" className=" mx-lg-3 text-nowrap">School Uniforms</Nav.Link>
          <Nav.Link href="#action3" className=" mx-lg-3">Corporate</Nav.Link>
          <Nav.Link href="#action4" className=" mx-lg-3">Sports</Nav.Link>
          <Nav.Link href="#action5" className=" mx-lg-3">Blogs</Nav.Link>
          

       <Navbar.Text className="px-md-2 mx-md-10 ms-sm-0 pb-1 d-lg-flex justify-content-lg-center col-6" style={{fontSize:"1.25rem"}} >
        <Search className="ms-sm-0 ms-lg-auto" />
        <Heart className="mx-2"/>
        <Cart2 className="mx-2 "/>
        <Person className="mx-2 "/>
        </Navbar.Text>
        </Nav>
        
        </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default NavigationBar;