import { Box, Heading, SimpleGrid, Flex, Image, Text, Button, Spacer } from '@chakra-ui/react'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'

// import assets Videoe
import Video2 from '../../assets/computervideo.mp4'
import { PauseCircleFilled, PlayCircleFilled } from '@ant-design/icons'



export default function Aboutaus() {
    const [playStatus, setplayStatus] = useState()


    const Imagestyling = {
        // w: '22%',
        margin: 'auto',
        p: '30px',
        borderRadius: '12px',
        textAlign:'left'

    }

    const Videostyling = {
        border: 'solid 15px rgb(128, 128, 255)',
        borderRadius: '12px',
        _hover: { bg: 'blue' },

    }

    const videoButton = {
       
        fontSize: '20px',
    }

    let BtngetMore ={
mt:'20px',
bg:'yellow',
pl:'10',
pr:'10',
borderRadius:"16",
FontWiegth:'500',
fontSize:'18',
boxShadow:'dark-lg',
 
 
    }
    return (
        <Box textAlign={'center'} mt={30} w={'90%'} m={'auto'} pt={30} >
            <Box w={{ base: '80%', md: '40%' }} m={'auto'} >
                <Heading fontSize={{base:18 , md :26}}>Why Us</Heading>
                <Text>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</Text>
            </Box >

            <SimpleGrid
                columns={[1, 2]}
                spacing={{ base: 5, md: 20 }}
                w={{ base: '70%', md: '90%' }}
                m={'auto'}
                mt={50}>
                <Box
                    mt={30}>
                    <Box {...Videostyling} position={'relative'}>

                        <ReactPlayer
                            url={Video2}
                            playing={playStatus}
                            width="100%"
                            height="auto"
                            loop="true"
                        />
                    </Box>

                    <Box {...videoButton}>
                        <button
                            w={'100%'}
                            fontSize={40}
                            onClick={
                                () => setplayStatus(!playStatus)}>

                            {playStatus ? <PauseCircleFilled /> : <PlayCircleFilled />}

                            <Spacer />
                            {playStatus ? "Pause" : 'play'}
                        </button>
                    </Box>
                </Box>

                <Box  {...Imagestyling}>
                    <Heading fontSize={{base:15 ,sm:12, md:23}}>
                        Crafting Your Dream Career: Building a Path You Love with us
                    </Heading>
                    <Text fontSize={[12,8,18]}>
                        At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.
                    </Text>

                    <Text fontSize={[12,8,18]} mt={5}>
                        Our Platform Is Designed To Empower Learners Like You To Excel In Today’s Dynamic World.
                    </Text>

                    <Button {...BtngetMore}>Get More</Button>
                </Box>


            </SimpleGrid>
        </Box>
    )
}
