import { Box, Flex, Heading, Text,Button,Link } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import Nevbar from '../Nevbar/Nevbar'

// for video playing
import ReactPlayer from 'react-player';

// import assets
import bgImage from '../../assets/women.png'
import homevideo from '../../assets/video.mp4'
import {ArrowForwardIcon} from '@chakra-ui/icons'
// import PlayCircleOutlined

export default function Home() {
    const [playStatus, setplayStatus] = useState(false)



    //  {/* <div
    //             style={{
    //                 // height: '600px', backgroundColor: 'rgb(110, 100, 201)',
    //                 // opacity: 0.7,
    //                 borderBottomLeftRadius: '50rem',
    //                 borderBottomRightRadius: '',

    //                 top: "0px;",
    //                 left: "0px",
    //                 wigth: "100%",
    //                 height: "600px",
    //                 /* UI Properties */
    //                 //  background: " rgb(38, 43, 219) 0% 0% no-repeat padding-box",
    //                 //  opacity: "0.43",

    //         // }}
    //         // > */}
    //         <Nevbar />

    //         <Flex>
    //            <Box>
    //               <Heading>We Create Learning Experience With Excellent Technology.</Heading>


    //               <Text>Unlimited Access To 100+ World class Courses,Hends on Project And Job-Ready Certificate Programs All Included Your Subscription </Text>
    //                           </Box>
    //                           <Box></Box>
    //                       </Flex> 
    //                    //    </div>


    const Homepagestyle = {
        bgImage: bgImage,
        h: '600px',
        w: '100%',
        bgSize: 'cover',
        bgPosition: 'center center',
        color: 'white',
        objectFit: 'cover',
        zIndex: '1000',
        opacity: '1'
    }

    const videoButton = {
        position: 'absolute',
        top: '250px',
        right: '350px',
        borderRadius:' 8',
        fontSize: '20px',
    }
    return (
        <Box
            {...Homepagestyle}
        >
            <Box bgColor={'blue'} h={'600px'} w={'100%'} opacity={0.5}  >
                <Nevbar />

                <Flex w={"90%"} m={'auto'} justify={'space-around'} mt={30} p={15}>
                    <Box w={'45%'}>
                        <Heading
                            fontSize={['35px', 'md', 'lg', 'xl']}
                            fontWeight={900}
                        >We Create Learning Experience With Excellent Technology.</Heading>

                        <Text fontSize={'md'}>Unlimited Access To 100+ World class Courses,Hends on Project And Job-Ready Certificate Programs All Included Your Subscription </Text>

                        <Flex w={'60%'} align={'center'}>
                            <Button  bg={'yellow'} borderRadius={20} color={'black'}  pl={20} pr={20} pt={5} pb={5}  fontSize={15} fontWeight={900} cursor={'pointer'} >Book Demo Class</Button>

                            <Link color={'yellow'}   fontSize={15} fontWeight={900} cursor={'pointer'} pl={5}>Explore More <ArrowForwardIcon/></Link>
                        </Flex>

                        

                    </Box >

                    <Box w={'45%'} bgColor={'black'} border={'solid 2px red'}>
                        <Box position={'relative'}>
                            <ReactPlayer
                                url={homevideo}
                                playing={playStatus}
                                width="100%"
                                height="auto"
                            />
                        </Box>

                        <Box {...videoButton}>
                            <button  onClick={() => setplayStatus(!playStatus)}>
                                {playStatus ? 'Pause' : 'Play'}
                            </button>
                        </Box>
                    </Box>

                </Flex>

            </Box>
        </Box>
    )
}
