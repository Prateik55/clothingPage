import {React,useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Producttype, {gotTypeData} from '../Filters/ProductType/Producttype';
import {productInfo}  from "../Filters/ProductType/ProductTypeData";
import { ChevronRight,ChevronDown, Justify } from "react-bootstrap-icons";
import PriceRangeSlider from '../Filters/PriceRangeSlider';
import { Button } from 'react-bootstrap';
import SizeTypes from '../Filters/SizeTypes';
import ColorFilter,{colors} from '../Filters/colorFilter';
import BrandsFilter,{Brands} from '../Filters/BrandsFilter';





//function for creating product type component by mapping the data --- to be read after sidebar component code 
const ProductTypeFunc = (productInfo) => {
   return (
   <Producttype
    key={productInfo.productType} 
    name={productInfo.productType}
    qty={productInfo.productQty}
   />)
}

// function for creation of color selection pallet component----to be read after sidebar component code 
const PickColorFunc=(colors)=> {
    return(
    <ColorFilter 
     key={colors.key}
     color={colors.color}
    />)
    
}
const PickBrandFunc=(Brands)=> {
    return(
        <BrandsFilter
            key={Brands.key}
            name={Brands.brand_name}

        />
    )
}

  

// Sidebar component function 

const Sidebar = () => {

    const[isOpen,setIsOpen]=useState(true);
    const[isPriceRangeOpen,setIsPriceRangeOpen]=useState(true);
    const[isSizeOpen,setIsSizeOpen]=useState(true);
    const [isColorsOpen,setIsColorsOpen]=useState(true);
    const [isBrandsOpen, setIsBrandsOpen]=useState(true);

    const handleClick=(e)=>{
        if(e.currentTarget.id === "sidebarSectionProductType"){
            setIsOpen(!isOpen);
        }
        if(e.currentTarget.id === "sidebarSectionPriceRange"){
            setIsPriceRangeOpen(!isPriceRangeOpen);
        }
        if(e.currentTarget.id === "sidebarSectionSizes"){
            setIsSizeOpen(!isSizeOpen);
        }
        if(e.currentTarget.id === "sidebarSectionColors"){
            setIsColorsOpen(!isColorsOpen);
        }
        if(e.currentTarget.id === "sidebarSectionBrands"){
            setIsBrandsOpen(!isBrandsOpen);
        }

    }

 
  return (
    <Container className="mx-0" fluid>
        <Row 
        id="sidebarRowFullScreen"
        style={{height:"100vh"}}
        variant="light"
        >
         <Col>
         <Row className=""
         id="SidebarSections"
         >
         {/* Sidebar section -- Product Type  */}
            <Row id="sidebarSectionProductType"
            className="mx-0 px-0"
            onClick={handleClick}
            >
            <Col lg={10}  className= "my-3"><h5 id="sidebarSectionTitleProductType">Products Type </h5> </Col>
            <Col lg={2} className="mx-0 my-3 px-0"> {isOpen?<ChevronDown/>:<ChevronRight />}  </Col>
            </Row>   
            
            <Row className="px-0 my-2"
            id="productsTypeNames"
            style={{display: isOpen ? 'block' : 'none'}}>
            {productInfo.map(ProductTypeFunc)}
            </Row> 

         {/* Sidebar Section --- Price Range  */}
            <Row id="sidebarSectionPriceRange"
            className="mx-0 px-0"
            onClick={handleClick}
            > 
            <Col lg={10}  className= "my-3"><h5 id="sidebarSectionTitleProductType">Price Range </h5> </Col>
            <Col lg={2} className="mx-0 my-3 px-0">{isPriceRangeOpen?<ChevronDown/>:<ChevronRight />}  </Col>
            </Row>

            <Row className='mx-auto' 
            id="priceRangeSlider"
            style={{display: isPriceRangeOpen ? 'block' : 'none'}}
            >    
            <PriceRangeSlider /> 
            <Button className="my-3"
            style={{ background:"black", color:"white", width:"6rem"}}
            variant="dark"
            size="sm"> Apply </Button>
            </Row>

         {/* Sidebar Section --- Sizes  */}  
            <Row id="sidebarSectionSizes"
            className="mx-0 px-0"
            onClick={handleClick}
            > 
            <Col lg={10} className="my-3"><h5 id="sidebarSectionTitleSizes">Size </h5> </Col>
            <Col lg={2} className="mx-0 my-3 px-0"> {isSizeOpen?<ChevronDown/>:<ChevronRight />}  </Col>
            </Row>
            <Row className='mx-0 px-0' 
            id="size"
            style={{display: isSizeOpen ? 'block' : 'none'}}
            >    
            <SizeTypes/>
            </Row>

         {/* Sidebar Section --- Colors  */}  
            <Row id="sidebarSectionColors"
            className="mx-0 px-0"
            onClick={handleClick}
            > 
            <Col lg={10} className="my-3"><h5 id="sidebarSectionTitleColors">Colors</h5> </Col>
            <Col lg={2} className="mx-0 my-3 px-0"> {isColorsOpen?<ChevronDown/>:<ChevronRight />}  </Col>
            </Row>
            <Row className='ms-0 me-1 ps-0 pe-5 f-wrap' 
            id="colors"
            style={{display: isColorsOpen ? 'flex' : 'none', flexDirection:"row", justifyContent:"flex-start"}}
            >    
               {colors.map(PickColorFunc)}
            </Row>

          {/* Sidebar Section --- Brands Checkboxes  */}  
            <Row id="sidebarSectionBrands"
            className="mx-0 px-0"
            onClick={handleClick}
            > 
            <Col lg={10} className="my-3"><h5 id="sidebarSectionTitleBrands">Brands</h5> </Col>
            <Col lg={2} className="mx-0 my-3 px-0"> {isBrandsOpen?<ChevronDown/>:<ChevronRight />}  </Col>
            </Row>
            <Row className='ms-1 mx-0 px-0 f-wrap' 
            id="Brands"
            style={{display: isBrandsOpen ? 'block' : 'none'}}
            >    
               {Brands.map(PickBrandFunc)}
            </Row>  


             
            </Row>



           


        </Col>
        </Row>
    </Container>

  )
}

export default Sidebar