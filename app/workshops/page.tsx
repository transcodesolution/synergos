import TimeTable from '@/lib/components/custom/time-table'
import { Box, Button, Container, Flex, Text, Title } from '@mantine/core'
import React from 'react'
import { workshopsData } from '../_components/WorkshopSection'

export default function Workshops() {
    return (
        <Container size='xl'>
            <Box py='xl'>
                <Flex justify='space-between' align='start' gap={32}>
                    <Box flex={4}>
                        <Title order={1}>Nascholing</Title>
                        <Title order={4} fw={400}>BIjscholing en lezingen</Title>
                        <br />
                        <Text>
                            Bijscholing in haptonomie houdt je als professional scherp en up-to-date met nieuwe inzichten en technieken. Het biedt de kans om je vaardigheden verder te verdiepen, nieuwe benaderingen te ontdekken, en effectiever in te spelen op de behoeften van je cliënten. Zo blijf je groeien in je vak en versterk je je impact als haptonoom.
                        </Text>
                    </Box>
                    <Button color='theme-blue' w='100%' flex={1} visibleFrom='md'>Download opleidingsbrochure</Button>
                </Flex>
                <br />
                <TimeTable rows={workshopsData} />
            </Box>
        </Container>
    )
}
