import { Box, Heading, Flex,Text,Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react';
import { Rate } from 'antd';

// import assets Image
import MenImage from '../../assets/men-photography.png'

export default function Fidbackpage() {
    return (
        <Box w={'90%'} textAlign={'center'} mt={10} m={'auto'}>
            <Heading  >Our Students Feedback</Heading >
            <Text p={5} w={'60%'} m={'auto'}>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</Text>
            <SimpleGrid  w={{base:'80%',md:'100%'}} m={'auto'} columns={{base:'1', md:'2'}}>
                <Box>
                <Image p={20} w={'100%'} src={MenImage} />
                </Box >
                <Box textAlign={'left'} pt={{base:10,md:20}} w={'80%'} fontSize={[10,15, 20,24]} m={'auto'}>
                        <Rate disabled defaultValue={5}/>
                      
                    <Text fontWeight={300}>"Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo Modi Tem."</Text>
                    <Text fontWeight={500}>Riad Isalm</Text>
                    <Text fontWeight={400}>Product Manager. @Learning.Com

                    </Text>
                </Box>
            </SimpleGrid>
        </Box>
    )
}
