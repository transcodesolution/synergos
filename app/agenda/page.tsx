import TimeTable from '@/lib/components/custom/time-table'
import { Box, Button, Container, Flex, Select, Text, Title } from '@mantine/core'
import React from 'react'
import { workshopsData } from '../_components/WorkshopSection'

export default function Agenda() {
    return (
        <Container size='xl'>
            <Box py='xl'>
                <Flex justify='space-between' align='start' gap={32}>
                    <Box flex={4}>
                        <Title order={1}>Agenda</Title>
                        <Title order={4} fw={400}>Nieuwe agenda vanaf 12-06-2025</Title>
                        <br />
                        <Text>
                            Bijscholing in haptonomie houdt je als professional scherp en up-to-date met nieuwe inzichten en technieken. Het biedt de kans om je vaardigheden verder te verdiepen, nieuwe benaderingen te ontdekken, en effectiever in te spelen op de behoeften van je cliënten. Zo blijf je groeien in je vak en versterk je je impact als haptonoom.
                        </Text>
                    </Box>
                    <Button color='theme-blue' w='100%' flex={1} visibleFrom='md'>Download opleidingsbrochure</Button>
                </Flex>
                <br />
                <Select
                    label="Filter op soort"
                    placeholder="Pick value"
                    data={['Alles soorten', 'Nascholing', 'Bijscholing', 'Workshops', 'Lezing']}
                    w={300}
                    styles={{
                        label: { fontWeight: 700 }
                    }}
                />
                <br />
                <Title order={3}>Jaar 2 van de vakopleiding (2VO 24/25)</Title>
                <TimeTable rows={workshopsData} />
                <Title order={3}>Afgerond</Title>
                <TimeTable rows={workshopsData} />
            </Box>
        </Container>
    )
}
