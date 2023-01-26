
import React from 'react'
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const SegmentTitle = () => {
  return (
    <Container fluid 
    style={{height:"20vh"}}>
      <Row className="bg-dull-light"
      style={{height:"20vh",flexFlow:"column"}}>
        <Col className="text-center pt-5"><h2>Corporate</h2> </Col>
        <Col className="text-center pb-4"><small>Homepage  /</small> Shop</Col>
      </Row>
    </Container>
  )
}

export default SegmentTitle