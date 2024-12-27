'use client'
import { Box, Button, em, Flex, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Link from 'next/link'
import React from 'react'

export default function EducationSidebar() {
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
    return (
        <Box mt={{ base: 64, lg: 0 }}>
            <Button w='100%' color='theme-blue'>Inschrijven</Button>
            <Link href='/login' style={{ textAlign: 'center', display: 'block', paddingBlock: '.5rem' }}>Al een account? Log hier in</Link>
            <Box bg={{ base: 'white', lg: 'theme-orange' }} p={{ base: '0', lg: 'xl' }}>
                <Flex direction='column' gap='md' display={{ base: 'none', lg: 'flex' }}>
                    <Title order={3} c='white'> De opleiding</Title>
                    <Link href='/login'><Text c='white'>Start, prijs & duur</Text></Link>
                    <Link href='/login'><Text c='white'>Programma en lesdata</Text></Link>
                    <Link href='/login'><Text c='white'>Accreditaties</Text></Link>
                    <Link href='/login'><Text c='white'>Catering</Text></Link>
                    <Link href='/login'><Text c='white'>Docenten</Text></Link>
                    <Link href='/login'><Text c='white'>Inhoud</Text></Link>
                    <Link href='/login'><Text c='white'>Werkwijze</Text></Link>
                    <Link href='/login'><Text c='white'>Leerdoelen</Text></Link>
                    <Link href='/login'><Text c='white'>Literatuur</Text></Link>
                </Flex>
                <Flex direction='column' gap='xs' mt='md'>
                    <Button variant='outline' c={{ base: 'theme-blue', lg: 'white' }} fw={700} color={isMobile ? 'theme-blue' : 'white'}>Bezoek open dag</Button>
                    <Button variant='outline' c={{ base: 'theme-blue', lg: 'white' }} fw={700} color={isMobile ? 'theme-blue' : 'white'}>Download opleidingsbrochure</Button>
                </Flex>
                <Box display={{ base: 'none', lg: 'block' }}>
                    <br />
                    <br />
                    <Text fw={700} c='white'>Locatie</Text>
                    <br />
                    <Text c='white'>Increatie</Text>
                    <Text c='white'>Stationsplein 80</Text>
                    <Text c='white'>2011 LM Haarlem</Text>
                    <br />
                    <Link href='/login'><Text c='white' td='underline'>Route Google maps</Text></Link>
                </Box>
            </Box >
        </Box >
    )
}
