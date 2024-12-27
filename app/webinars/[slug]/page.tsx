import { Box, Button, Container, Flex, Text, Title } from '@mantine/core'
import React from 'react'
import Teachers from './_components/Teachers'

export default function WebinarDetail() {
    return (
        <Container size='xl'>
            <Box py='xl'>
                <Flex justify='space-between' align='start' gap={32}>
                    <Box flex={4}>
                        <Title order={1}>Over Synergos</Title>
                        <Title order={4} fw={400}>Onze visie</Title>
                        <br />
                        <Text>
                            Bijscholing in haptonomie houdt je als professional scherp en up-to-date met nieuwe inzichten en technieken. Het biedt de kans om je vaardigheden verder te verdiepen, nieuwe benaderingen te ontdekken, en effectiever in te spelen op de behoeften van je cliënten. Zo blijf je groeien in je vak en versterk je je impact als haptonoom.
                        </Text>
                        <br />
                        <Title order={4} fw={400}>Onze missie</Title>
                        <br />
                        <Text>
                            Bijscholing in haptonomie houdt je als professional scherp en up-to-date met nieuwe inzichten en technieken. Het biedt de kans om je vaardigheden verder te verdiepen, nieuwe benaderingen te ontdekken, en effectiever in te spelen op de behoeften van je cliënten. Zo blijf je groeien in je vak en versterk je je impact als haptonoom.
                        </Text>
                        <Title order={4} fw={400}>Onze geschiedenis</Title>
                        <br />
                        <Text>
                            Bijscholing in haptonomie houdt je als professional scherp en up-to-date met nieuwe inzichten en technieken. Het biedt de kans om je vaardigheden verder te verdiepen, nieuwe benaderingen te ontdekken, en effectiever in te spelen op de behoeften van je cliënten. Zo blijf je groeien in je vak en versterk je je impact als haptonoom.
                        </Text>
                        <br />
                        <Button color='theme-blue' flex={1} visibleFrom='md'>Download geschiedenisbrochure</Button>
                    </Box>
                    <Button color='theme-blue' w='100%' flex={1} visibleFrom='md'>Download opleidingsbrochure</Button>
                </Flex>
                <br />
                <Title order={2}>De docenten</Title>
                <Title order={4}>Wie zijn wij? </Title>
                <br />
                <Text>Bijscholing in haptonomie houdt je als professional scherp en up-to-date met nieuwe inzichten en technieken. Het biedt de kans om je vaardigheden verder te verdiepen, nieuwe benaderingen te ontdekken, en effectiever in te spelen op de behoeften van je cliënten. Zo blijf je groeien in je vak en versterk je je impact als haptonoom.</Text>
                <br />
                <Teachers />
                <br />
                <Title order={2}>De medewerkers</Title>
                <Title order={4}>Wie zijn wij? </Title>
                <br />
                <Text>Bijscholing in haptonomie houdt je als professional scherp en up-to-date met nieuwe inzichten en technieken. Het biedt de kans om je vaardigheden verder te verdiepen, nieuwe benaderingen te ontdekken, en effectiever in te spelen op de behoeften van je cliënten. Zo blijf je groeien in je vak en versterk je je impact als haptonoom.</Text>
                <br />
                <Teachers size={3} />
            </Box>
        </Container>
    )
}
