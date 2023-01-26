import React from 'react'
import {Col} from "react-bootstrap"
import { Row } from 'react-bootstrap'
import ItemsCard from '../ItemCard/ItemsCard'
import { ItemsData } from '../ItemCard/ItemsData'

const getCards = (ItemsData) => {
    return (
    <Col lg={3}>
       <ItemsCard 
        key= {ItemsData.id}
        image_url={ItemsData.url}
        name={ItemsData.name}
        price={ItemsData.price}
        rating={ItemsData.rating}
        reviews={ItemsData.reviews}
       />
    </Col>
    )
}

const ItemsSpace = () => {
  return (
    <Row className="" style= {{display:"flex", justifyContent:"space-between"}}>
     {ItemsData.map(getCards)} 
    </Row>
  )
}

export default ItemsSpace