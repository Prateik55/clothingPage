import React,{useState} from 'react'
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';



const SizeTypes = () => {
   const [activeSize,setActiveSize]=useState("M")
 
    function handleClick(size){
        setActiveSize(size)
    }

  return (
    <Row className="mx-0 px-0 flex-nowrap "
    style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly", width:"75%"}}>
    
    <Button
    className= ""
    style={{display:"inline-flex", width:"auto", border:"1px solid grey", borderRadius:"0px"}}
    onClick={() => handleClick("XS")}
    variant={activeSize === "XS" ? "dark active " : ""}
   > XS</Button>
    
    <Button 
    className= ""
    style={{display:"inline-flex", width:"auto", border:"1px solid grey", borderRadius:"0px"}}
    variant={activeSize === "S" ? "dark active " : ""}
    onClick={() => handleClick("S")}>S</Button>
    
    <Button
    className= ""
    style={{display:"inline-flex", width:"auto", border:"1px solid grey", borderRadius:"0px"}}
    variant={activeSize === "M" ? "dark active " : ""}
    onClick={() => handleClick("M")}>M</Button>

    <Button 
    className= ""
    style={{display:"inline-flex", width:"auto", border:"1px solid grey", borderRadius:"0px"}}
    variant={activeSize === "L" ? "dark active " : ""}
    onClick={() => handleClick("L")}>L</Button>

    <Button
    className= ""
    style={{display:"inline-flex", width:"auto", border:"1px solid grey", borderRadius:"0px"}}
    variant={activeSize === "XL" ? "dark active " : ""}
    onClick={() => handleClick("XL")}>XL</Button>
    
    <Button 
    className= ""
    style={{display:"inline-flex", width:"auto", border:"1px solid grey", borderRadius:"0px"}}
    variant={activeSize === "XXL" ? "dark active " : ""}
    onClick={() => handleClick("XXL")}>XXL</Button>
      
    </Row>
  )
}

export default SizeTypes