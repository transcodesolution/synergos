import { Box, Container, Flex, Stack, Text, Title } from '@mantine/core'
import React from 'react'
import ContactForm from './_components/ContactForm'
import ContactInfo from './_components/ContactInfo'

export default function Contact() {
    return (
        <Container size='xl'>
            <section className='section_Divider'>
                <Stack gap='xl'>
                    <Flex gap={{ base: 'md', md: '60' }} direction={{ base: 'column', md: 'row' }}>
                        <Stack flex={1}>
                            <Box>
                                <Title order={1}>Contact</Title>
                                <Title order={4} fw={400}>Stuur ons een bericht</Title>
                            </Box>
                            <Text>Kom in contact met de wereld van Hapttherapie</Text>
                            <ContactForm />
                        </Stack>
                        <ContactInfo />
                    </Flex>
                    <Flex gap={{ base: 'md', md: '60' }} direction={{ base: 'column', md: 'row' }}>
                        <Stack flex={1}>
                            <Box>
                                <Title order={1}>Synergos Andalusië</Title>
                                <Title order={4} fw={400}>Onze nascholing locatie in Spanje</Title>
                            </Box>
                            <Text>Onze locatie in Spanje is eigendom van de voormalige eigenaren van Synergos. Nico & Monique werken nog steeds met veel plezier mee aan de ontwikkeling van de Synergosvisie en bieden intensieve bij- en nascholingen aan in Spanje.</Text>
                        </Stack>
                        <ContactInfo />
                    </Flex>
                </Stack>
            </section>
        </Container>
    )
}
