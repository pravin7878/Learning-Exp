import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Logo from '../../assets/logo.png'
import { Link } from '@chakra-ui/react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Nevbar() {
    const [nevbgcolor, setnevbgcolor] = useState('none')
    const location = useLocation()

    const buttonStyling = {
        fontSize: '21px',
        fontWeight: '300',
        color: 'white',
        m: '6px',
        _hover: {
            borderBottom: 'solid 3px yellow',
            textShadow: '1px 1px white'
        }
    }

    useEffect(() => {
        const homepage = location.hash === '/'

        if (!homepage) {
            setnevbgcolor('blue')
        }

    }, [location.hash])

    return (
        <Flex
            justify={{ base: 'space-evenly', md: 'center' }}
            zIndex={1000}
            w={{ base: "80%", md: '100%' }}
            m={'auto'}
            position={'fixed'}
            top={0}
            ZIndex={1000}
            bg={nevbgcolor}
            // opacity={10}

        // bg={'rgb(100, 88, 208)'}
        >

            <Flex
                w={'47%'}
                justify={'Left'}
                m={5}
                align={'center'}>

                <Image w={'10%'} src={Logo} />

                <Text fontWeight={600} fontSize={24}>Learning Exp</Text>
            </Flex>

            <Flex
                align={'center'}
                w={'40%'}
                justify={'space-around'}
                display={{ base: 'none', md: 'flex' }}
            >
                <Link href='#home' {...buttonStyling}>Home</Link>
                <Link href={'#services'} {...buttonStyling}>Services Us</Link>
                <Link href={'#about'} {...buttonStyling}>Why Us</Link>
                <Link href={'#goal'} {...buttonStyling}>Our Goals</Link>
                <Link href={'#contect'} {...buttonStyling}
                    bg={'yellow'} borderRadius={12} color={'black'} p={2} pr={4} pl={4} fontSize={18} fontWeight={900}
                >Contact Us</Link>
            </Flex>
        </Flex>
    )
}
