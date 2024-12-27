import Quote from '@/lib/components/custom/quote'
import { Box, Container, Flex, Stack, Text, Title } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

export default function TeacherDetails() {
    return (
        <Container size='xl'>
            <Box py='xl'>
                <Title order={1}>Nico Pronk</Title>
                <Title order={4} fw={400}>Docent & therapeut</Title>
                <br />
                <Flex align='start' direction={{ base: 'column-reverse', md: 'row' }} gap='xl'>
                    <Stack>
                        <Quote quote='Ons lichaam reageert veel sneller dan ons brein op alles wat van buiten op ons afkomt' />
                        <Text>Bijscholing in haptonomie houdt je als professional scherp en up-to-date met nieuwe inzichten en technieken. Het biedt de kans om je vaardigheden verder te verdiepen, nieuwe benaderingen te ontdekken, en effectiever in te spelen op de behoeften van je cliënten. Zo blijf je groeien in je vak en versterk je je impact als haptonoom.</Text>
                        <Box>
                            <Title order={3} fw={400}>MIjn  missie</Title>
                            <Text>Bijscholing in haptonomie houdt je als professional scherp en up-to-date met nieuwe inzichten en technieken. Het biedt de kans om je vaardigheden verder te verdiepen, nieuwe benaderingen te ontdekken, en effectiever in te spelen op de behoeften van je cliënten. Zo blijf je groeien in je vak en versterk je je impact als haptonoom.</Text>
                        </Box>
                        <Box>
                            <Title order={3} fw={400}>Contact met Nico</Title>
                            <a href="mailto:nico@synergos.nl"><Text td='underline'> nico@synergos.nl</Text></a>
                            <a href="www.nico.nl"><Text td='underline'>www.nico.nl</Text></a>
                        </Box>
                    </Stack>
                    <Image src='/images/teacher-male.png' alt='teacher' height={350} width={350} />
                </Flex>
            </Box>
        </Container>
    )
}
