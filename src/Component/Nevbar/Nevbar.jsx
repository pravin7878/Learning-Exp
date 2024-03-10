import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

export default function Nevbar() {
    const buttonStyling = {
        fontSize: '21px',
        fontWeight: '300',
        color: 'white',

        _hover: {
            borderBottom: 'solid 3px yellow',
            textShadow: '1px 1px white'
        }
    }

    return (
        <Flex
            justify={'center'}
            zIndex={1000}
        >

            <Flex
                w={'47%'}
                justify={'Left'}
                m={5}
                align={'center'}>

                <Image w={'10%'} src={'../public/Image/logo.png'} />

                <Text fontWeight={600} fontSize={24}>Learning Exp</Text>
            </Flex>

            <Flex
                align={'center'}
                w={'40%'}
                justify={'space-around'}
            >
                <Link {...buttonStyling}>Home</Link>
                <Link {...buttonStyling}>Services Us</Link>
                <Link {...buttonStyling}>Why Us</Link>
                <Link {...buttonStyling}>Our Goals</Link>
                <Link {...buttonStyling}
                bg={'yellow'} borderRadius={12} color={'black'}  pl={20} pr={20} pt={10} pb={10}  fontSize={18} fontWeight={900} 
                >Contact Us</Link>
            </Flex>
        </Flex>
    )
}
