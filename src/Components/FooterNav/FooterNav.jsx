import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import FooterNavSectionOne from './FooterNavSectionOne'
import FooterNavSectionTwo from './FooterNavSectionTwo'


const FooterNav = () => {
    const getCurrentYear = () => {
    return new Date().getFullYear();  };

  return (
    <Navbar className=" py-5 bg-dark flex-lg-column" >
    <Nav
    sticky="bottom"
    className="mx-5 *y-2 pb-5 "
    style={{borderBottom: "2px solid white"}}
    >
    <FooterNavSectionOne/>
    <FooterNavSectionTwo/>

    </Nav>
    <Nav className="text-light justify-content-start my-2"
    style={{width:"75%"}}>  &#169; {getCurrentYear() }  <strong className= "mx-2"> Toppers United. </strong>   All rights reserved  </Nav>
    </Navbar>
    
  )
}

export default FooterNav;