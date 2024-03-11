import { Box, Flex, Heading, Link, SimpleGrid, Text, Image, Divider } from '@chakra-ui/react'
import { Button, Input } from 'antd'
import React from 'react'

import Logo from '../../assets/logo.png'
import { FacebookOutlined, LinkedinOutlined, PinterestOutlined, TwitterOutlined } from '@ant-design/icons'
export default function Footer() {
    return (
        <Box>
            <Flex 
            bg={'blue'} 
            w={'70%'} 
            m={'auto'} 
            justify={'space-around'} 
            align={'center'} 
            p={18} 
            borderRadius={12} 
            color={'white'}
            mt={10}

            flexDirection={{base:'column' , md:'row'}}
            >
                <Box w={{base:'80%', md:'47%'}} mb={{base:5}}>
                    <Heading>Contact Us!</Heading>
                    <Text></Text> <Text>There are many variations of passages of Lorem Ipsum but the majority have suffered alteration.</Text>
                </Box>

                <Box  w={{base:'70%', md:'47%'}} bg={'white'} border={'solid 2px black'} borderRadius={10}>
                    <Flex w={'100%'} >
                    <Input type='email' placeholder='Enter email' borderRadius={10} />
                    <Button>Send</Button>
                    </Flex>
                   
                </Box>
            </Flex>

            <SimpleGrid 
            columns={4} 
            spacing={10}
            w={'90%'}
            m={'auto'}
            mt={30}
            mb={5}
            display={{base:'none' , md :'grid'}}
            >
                <Box 
                textAlign={'center'} 
                m={'auto'}
                w={'100%'}
                >
                    <Box 
                    display={'flex'} 
                     w={'70%'} 
                    m={'auto'} 
                    justifyContent={'space-around'}
                    textAlign={'left'}
                    alignItems={'center'}
                    >
                        <Image 
                        w={'30%'} 
                        src={Logo} />
                        <Text w={'50%'}>Learning Exp</Text>
                    </Box>
                    <Box display={'flex'} p={30} w={"70%"} m={'auto'} justifyContent={'space-around'}>
                        <FacebookOutlined />
                        <TwitterOutlined />
                        <LinkedinOutlined />
                        <PinterestOutlined />
                    </Box>
                </Box>

                <SimpleGrid columns={1} w={'70%'}  m={'auto'}>
                    <Text
                    fontWeight={600}
                    fontSize={20}
                    >Links</Text>
                    <Link>Home</Link>
                    <Link>Pricing</Link>
                    <Link>Dounload</Link>
                    <Link>About</Link>
                    <Link>Service</Link>
                </SimpleGrid>

              
                <SimpleGrid columns={1} w={'70%'}  m={'auto'} >
                    <Text 
                    fontWeight={600}
                    fontSize={20}
                    >Support</Text>
                    <Link>FAQ</Link>
                    <Link>How it</Link>
                    <Link>Features</Link>
                    <Link>Contect</Link>
                    <Link>Reporting</Link>
                    </SimpleGrid>

                    <SimpleGrid 
                    columns={1} 
                    w={'70%'} 
                     m={'auto'}>
                       
                    <Text  fontWeight={600}
                    fontSize={20}>Contect Us</Text>
                    <Text>+880 12345678</Text>
                    <Text>youremail@gmail.com</Text>
                    <Text mb={19}>Pune City</Text>
                    </SimpleGrid>
            </SimpleGrid>
          
            <Flex 
            w={'100%'}
            border={'solid 1px black'}
            justify={{base:'space-evenly',md: 'space-around'}}
            p={{base:1 , md :3}}
            mb={5}
            mt={5}
            fontSize={10}
            
            >
           <Text >Copyright & Design By @Learning Exp.</Text>
           <Text>Learning-Exp</Text>
           <Text>Terms of use</Text>
            </Flex >


        </Box>
    )
}
