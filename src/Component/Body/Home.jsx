import { Box, Flex, Heading, Text, Button, Link, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect , useState } from 'react'
import Nevbar from '../Nevbar/Nevbar'

// for video playing
import ReactPlayer from 'react-player';

// import assets
import bgImage from '../../assets/women.png'
import homevideo from '../../assets/video.mp4'
import { ArrowForwardIcon } from '@chakra-ui/icons'
// import PlayCircleOutlined

export default function Home() {
    const [playStatus, setplayStatus] = useState(false)

   

    const Homepagestyle = {
        bgImage: bgImage,
        h: { base: '900px', md: '600px' },
        w: '100%',
        bgSize: 'cover',
        bgPosition: 'center center',
        color: 'white',
        objectFit: 'cover',
        zIndex: '1000',
        opacity: '1',
    }

    const videoButton = {
        position: 'absolute',
        top: '250px',
        right: '350px',
        borderRadius: ' 8',
        fontSize: '20px',
    }

   
    return (
        <Box
            {...Homepagestyle}
            id='Home'
        >
            <Box
                bgColor={'blue'}
                h={{ base: '900px', md: '600px' }}
                w={'100%'}
                opacity={0.6}
                
                borderBottomRightRadius={{base:20, md:200}}
                borderBottomLeftRadius={{base:100, md:300}}
                position={'relative'}
                pt={70}

            >
                <Nevbar />

              
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 50, md: 30 }} w={{ base: '70%', md: "90%" }}
                    m={'auto'} mt={50}>

                    <Box>
                        <Heading
                            fontSize={['sm', 'md', 'lg', 'xl']}
                            fontWeight={900}
                        >We Create Learning Experience With Excellent Technology.</Heading>

                        <Text fontSize={['sm', 'md', 'lg', 'xl']}>Unlimited Access To 100+ World class Courses,Hends on Project And Job-Ready Certificate Programs All Included Your Subscription </Text>

                        <Flex w={{ base: '100%', md: '70%' }} align={'center'} justify={'space-around'}>
                            <Button
                                bg={'yellow'}
                                borderRadius={20}
                                color={'black'}
                                pl={{ base: 19, md: 20 }}
                                pr={{ base: 19, md: 20 }}
                                pt={5}
                                pb={5}
                                fontSize={{ base: 10, md: 15 }}
                                fontWeight={900}
                                cursor={'pointer'}
                                m={10}
                                w={'50%'}
                            >Book Demo Class</Button>

                            <Link
                                color={'yellow'}
                                fontSize={{ base: 17, md: 15 }}
                                fontWeight={{ base: 600, md: 900 }}
                                cursor={'pointer'}
                                w={'50%'}
                                pl={5}>Explore More <ArrowForwardIcon /></Link>
                        </Flex>



                    </Box >

                    <Box bgColor={'black'} border={'solid 2px red'}>
                        <Box position={'relative'}>
                            <ReactPlayer
                                url={homevideo}
                                playing={playStatus}
                                width="100%"
                                height="auto"
                            />
                        </Box>

                        <Box {...videoButton}>
                            <button onClick={() => setplayStatus(!playStatus)}>
                                {playStatus ? 'Pause' : 'Play'}
                            </button>
                        </Box>
                    </Box>
                </SimpleGrid>
                

            </Box>
        </Box>
    )
}
