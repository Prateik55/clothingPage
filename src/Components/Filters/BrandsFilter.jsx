import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';

const Brands= [
    { "key": 1, "brand_name": "Gucci" },
    { "key": 2, "brand_name": "Louis Vuitton" },
    { "key": 3, "brand_name": "Prada" },
    { "key": 4, "brand_name": "Chanel" },
    { "key": 5, "brand_name": "Dior" },
    { "key": 6, "brand_name": "Saint Laurent" },
    { "key": 7, "brand_name": "Valentino" }
 ]

 


const BrandsFilter = (props) => {
    const [checkboxClass, setCheckboxClass] = useState("bg-white");
    
    const handleCheckboxChange = (e) => {
     setCheckboxClass(e.target.checked ? "bg-dark" : "bg-white")
}
  return (
    <Form>
    <Form.Check className=""
    >
      <Form.Check.Input 
        className={checkboxClass} 
        onChange={handleCheckboxChange} 
        type="checkbox" 
        id="custom-checkbox" 
        />
        <Form.Check.Label
        className="text-dark"
        > {props.name}</Form.Check.Label>
    </Form.Check>
    </Form>
  )
}

export default BrandsFilter
export {Brands}