import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/Navbar/NavigationBar';
import OfferRibbon from "./Components/OfferRibbon/OfferRibbon"
import SegmentTitle from "./Components/SegmentTitle/SegmentTitle"
import ContentBodyGrid from './Components/ContentBodyGrid/ContentBodyGrid';
import FooterNav from './Components/FooterNav/FooterNav';


const App = () => {
  return (
    <div>
    <NavigationBar/>
    <OfferRibbon/>
    <SegmentTitle/>
    <ContentBodyGrid/>
    <FooterNav/>
   

    
    </div>
  )
}

export default App
