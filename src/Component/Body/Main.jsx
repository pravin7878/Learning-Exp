import { Box, Link } from '@chakra-ui/react'
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
    <Box id='home' >
    <Home/>
    </Box>

    <Box id='services' pt={70}>
    <Services/>
    </Box>

    <Box id='about' pt={70}>
    <AboutUs />
    </Box>

    <Box id='goal' pt={70}>
    <Ourcourse/>
    </Box>

    <Box >
    <Fidbackpage/>
    </Box>
    
    <Box id='contect'>
    <Footer/>
    </Box>
   </Box>
  )
}
