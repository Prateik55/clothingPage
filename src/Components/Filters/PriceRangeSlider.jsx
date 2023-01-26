import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

import { Container, Row, Col, Form } from 'react-bootstrap';


function PriceRangeSlider() {

  const [minValue, set_minValue] = useState(800);
  const [maxValue, set_maxValue] = useState(1850);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  

  return (
    <Container className="mx-lg-0 px-lg-0 ">
      <Row 
      >
        <Col >
          <Form>
            <Form.Group >
              <MultiRangeSlider className="ms-lg-0 me-lg-4  "
                
                min={100}
                max={2000}
                label="false"
                step={5}
                ruler="false"
                barLeftColor= "lightgrey"
                barLeftInnerShadow="none"
                barRightColor= "lightgrey"
                barInnerColor= "black"
                thumbLeftColor= "black"
                thumbRightColor= "black"
                minValue={minValue}
                maxValue={maxValue}
                style={{borderStyle:"none", boxShadow:"none"}}
                onInput={(e) => {
                  handleInput(e);
			            }}
              />
            </Form.Group>
             <Form.Label>Price: ${minValue} - ${maxValue}</Form.Label>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default PriceRangeSlider;
