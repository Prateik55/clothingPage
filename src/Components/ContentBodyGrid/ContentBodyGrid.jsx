import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../SideBar/Sidebar'
import ItemsSpace from '../ItemsSpace/ItemsSpace';
import SortingComponents from '../SortingComponents/SortingComponents';

const ContentBodyGrid = () => {
  return (
    <Container className="" fluid 
    >
        <Row className=" my-5 py-5"style={{Height:"100vh"}}>
         <Col lg={3}> <Sidebar/> </Col>
         <Col lg={9} >
         <SortingComponents/>
         <Row > <ItemsSpace /> </Row> 
         </Col>
        </Row>
    </Container>
  )
}

export default ContentBodyGrid;