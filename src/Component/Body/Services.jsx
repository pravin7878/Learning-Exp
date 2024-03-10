import { Box, Heading, SimpleGrid,Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'

// import assets Image

import Dashboard from '../../assets/Dashboard.png'
import Layout from '../../assets/layout.png'
import smartphone1 from '../../assets/smartphone1.png'

export default function Services() {
  return (
   <Box textAlign={'center'}>
    <Box w={'60%'} m={'auto'}> 
    <Heading>We provide various kind of learning modules for you</Heading>
    <Text>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem.</Text>
    </Box>
    <SimpleGrid columns={[1,1,2,3]} >
<Flex>
    <Image src={smartphone1}/>
    <Heading></Heading>
    <Text></Text>
</Flex>

<Flex>
    <Image src={Dashboard}/>
    <Heading></Heading>
    <Text></Text>
</Flex>

<Flex>
    <Image src={Layout}/>
    <Heading></Heading>
    <Text></Text>
</Flex>
    </SimpleGrid>
   </Box>
  )
}
