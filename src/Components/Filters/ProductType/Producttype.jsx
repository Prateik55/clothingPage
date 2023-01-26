import React from 'react'
import { productInfo } from './ProductTypeData';"./ProductTypeData"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';



function getProductType(productInfo){
    return productInfo.productType
}
const gotTypeData = productInfo.map(getProductType);




const Producttype = (props) => {
  return (
    <Row className="mx-2 my-0 py-1 " id="productTypeRow">
    <Col lg={10} id="productTypeName"><small className="text-muted ">{props.name}</small></Col>
    <Col lg={2} id="productTypeQuantity"><small className="text-muted ">({props.qty})</small></Col>
    </Row>
  )
}

export default Producttype;
export {gotTypeData};