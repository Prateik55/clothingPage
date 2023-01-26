import React from 'react'
import Card from 'react-bootstrap/Card';
import  {Star, StarFill } from 'react-bootstrap-icons';
import { Col } from 'react-bootstrap';

const ItemsCard = (props) => {

  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(i < props.rating ? <StarFill key={i} color="orange" /> : <Star key={i} color="gray" />);
  }

  return (
   
    <Card  className="my-4 "
    border="white"
    > 
     <Card.Img  
     variant="top" 
     src={props.image_url}
     style={{maxHeight:"40vh", objectFit:"cover" }}   
     /> 
     <Card.Body style={{display:"flex", flexDirection:"column"}}>

     <Card.Title>{props.name} </Card.Title>

     <Col className="flex-row text-danger ">
        <Card.Text className='mx-2'
        style={{display:"inline-flex", }} 
        variant="danger" 
        id="currentPrice"> ${props.price}</Card.Text>

        <Card.Text 
        style={{display:"inline-flex", }} 
        className="text-muted text-decoration-line-through mx-2 " id="originalPrice"> ${props.price}</Card.Text>
     </Col> 

     <Col className="flex-row ">   
        <Card.Text 
        className='mx-1'
        Color="orange"
        style={{display:"inline-flex", }}> {stars} </Card.Text>
        <Card.Text 
        className='mx-1'
        style={{display:"inline-flex", }}> 
        ({props.reviews} reviews) 
        </Card.Text>
     </Col>
     </Card.Body>
    </Card>
    
  )
}

export default ItemsCard