import { Box, Container, Stack, Text, Title } from '@mantine/core'
import React from 'react'

export default function PrivacyPolicy() {
    return (
        <Container size='xl'>
            <section className='section_Divider'>
                <Stack gap='xl'>
                    <Box>
                        <Title order={1}>Algemene Voorwaarden </Title>
                        <Title order={4} fw={400}>Consumenten voor Particulier Onderwijs en Opleidingen</Title>
                        <br />
                        <Text>Deze Algemene Voorwaarden Consumenten van de Branchevereniging Nederlandse Raad voor Training en Opleiding (NRTO) zijn tot stand gekomen in overleg met De Consumentenbond in november 2020 en treden in werking uiterlijk op 1 september 2021.</Text>
                    </Box>
                    <Box>
                        <Title order={4} fw={400}>Inhoud</Title>
                        <br />
                        <Text >Artikel 1 - Definities</Text>
                        <Text>Artikel 2 - Toepasselijkheid</Text>
                    </Box>
                </Stack>
            </section>

        </Container>
    )
}
