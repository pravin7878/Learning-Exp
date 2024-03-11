import { Box, Heading, SimpleGrid, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

// import assets Image

import Dashboard from '../../assets/Dashboard.png'
import Layout from '../../assets/layout.png'
import smartphone1 from '../../assets/smartphone1.png'

export default function Services() {



    const Imagestyling = {
        // w: '22%',
        margin: 'auto',
        p: '30px',
        borderRadius: '12px',
        _hover: { bg: 'rgb(250, 248, 228)' }
    }

    return (
        <Box 
        textAlign={'center'} 
        mt={30} 
        w={'90%'} 
        m={'auto'} 
        pt={30}
        id='Services'
        >
           
            <Box w={{base:'80%',md:'40%'}} m={'auto'}>
                <Heading fontSize={26}>We provide various kind of learning modules for you</Heading>
                <Text>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem.</Text>
            </Box >
            {/* <Flex 
            justify={{ base: 'space-around', md: 'space-between' }} 
            flexDirection={{ base: 'column', md: 'row' }}
            align={'center'} 
            w={{ base: '100%', md: '90%' }}
             m={'auto'} 
             > */}
             <SimpleGrid columns={[1,1,2,3]} spacing={{base:5,md:20}} w={{base:'70%',md:'90%'}}m={'auto'}>
                <Box  {...Imagestyling}>
                    <Image w={'100%'} src={smartphone1} />
                    <Heading>Learn Anything</Heading>
                    <Text>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout.</Text>
                </Box>

                <Box  {...Imagestyling}>
                    <Image w={'100%'} src={Dashboard} />
                    <Heading>Flexible Learning</Heading>
                    <Text>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. </Text>
                </Box>

                <Box {...Imagestyling}>
                    <Image w={'100%'} src={Layout} />
                    <Heading>Expert Connect</Heading>
                    <Text>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem  </Text>
                </Box>
                </SimpleGrid>
            {/* </Flex> */}
        </Box>
    )
}
