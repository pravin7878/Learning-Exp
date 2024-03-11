import { Box } from '@chakra-ui/react'
import React from 'react'
import Home from './Home'
import Services from './Services'
import AboutUs from './AboutUs'
import Ourcourse from './Ourcourse'
import Fidbackpage from './Fidbackpage'
import Footer from '../Footer/Footer'


export default function Main() {
  return (
   <Box>
    <Home/>
    <Services/>
    <AboutUs />
    <Ourcourse/>
    <Fidbackpage/>
    <Footer/>
   </Box>
  )
}
