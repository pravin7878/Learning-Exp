import { CheckCircleFilled } from '@ant-design/icons'
import { Box, Heading, SimpleGrid, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

// import assets Image
import assignment from '../../assets/assignment.svg'
import user from '../../assets/supervised_user.svg'

export default function Ourcourse() {



    const Imagestyling = {
        margin: 'auto',
        p: '30px',
        borderRadius: '12px',
        _hover: { bg: 'rgb(250, 248, 228)' }
    }

    return (<Box
       w={'90%'} m={'auto'} pt={30}   mt={30} >
            <Box w={{ base: '80%', md: '60%' }} m={'auto'} textAlign={'center'}
            >
                <Heading
                    fontSize={{base:15, sm:17,md:26}}
                >We Completed 1200+ Certification Program Successfully & Counting
                </Heading>

                <Text fontSize={[12,8,18]}>
                    At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.
                </Text>
            </Box >

            <SimpleGrid columns={[1, 2, 2, 4]} spacing={{ base: 1,sm:10, md: 20 }} w={{ base: '70%', md: '90%' }} m={'auto'}>
                <Flex
                    {...Imagestyling}
                >
                    <Box>
                        <Image src={assignment}/>
                    </Box>

                    <Box>
                        <Heading  fontSize={{base:15, sm:17,md:26}}>100+</Heading>
                        <Text>Batch Complete</Text>
                    </Box>
                </Flex>

                <Flex  {...Imagestyling}>
                    <Box>
                        <Image src={assignment} />
                    </Box>

                    <Box>
                        <Heading  fontSize={{base:15, sm:17,md:26}}>50+</Heading>
                        <Text>Active Batches</Text>
                    </Box>
                </Flex>

                <Flex {...Imagestyling}>
                    <Box>
                        <Image src={user} />
                    </Box>

                    <Box>
                        <Heading  fontSize={{base:15, sm:17,md:26}}>10,000+</Heading>
                        <Text>Student Satisfied</Text>
                    </Box>
                </Flex>
                <Flex {...Imagestyling}>
                    <Box>
                        <Image src={user} />
                    </Box>

                    <Box>
                        <Heading  fontSize={{base:15, sm:17,md:26}}>10+</Heading>
                        <Text>Course Modules</Text>
                    </Box>
                </Flex>
            </SimpleGrid>
            {/* </Flex> */}
        </Box>
    )
}
