import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Nevbar() {
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

    return (
        <Flex
            justify={{base:'space-evenly' , md:'center'}}
            zIndex={1000}
            w={{base:"80%" ,md:'100%'}}
            m={'auto'}
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
                display={{base:'none',md:'flex'}}
            >
                <Link  to={'/'} {...buttonStyling}>Home</Link>
                <Link to={'/services'} {...buttonStyling}>Services Us</Link>
                <Link to={'/whyus'} {...buttonStyling}>Why Us</Link>
                <Link to={'/goals'} {...buttonStyling}>Our Goals</Link>
                <Link to={'contect'} {...buttonStyling}
                    bg={'yellow'} borderRadius={12} color={'black'} p={2} pr={4} pl={4} fontSize={18} fontWeight={900}
                >Contact Us</Link>
            </Flex>
        </Flex>
    )
}
