import Pagination from '@/lib/components/custom/pagination'
import WebinarCard from '@/lib/components/custom/webinar-card'
import { Box, Button, Container, Flex, Stack, Text, Title } from '@mantine/core'
import React from 'react'

export default function Webinars() {
    return (
        <Container size='xl'>
            <Box py='xl'>
                <Flex justify='space-between' align='start' gap={32}>
                    <Box flex={4}>
                        <Title order={1}>Webinars</Title>
                        <Title order={4} fw={400}>Kijk de laatste Webinars terug</Title>
                        <br />
                        <Text>
                            Bijscholing in haptonomie houdt je als professional scherp en up-to-date met nieuwe inzichten en technieken. Het biedt de kans om je vaardigheden verder te verdiepen, nieuwe benaderingen te ontdekken, en effectiever in te spelen op de behoeften van je cliënten. Zo blijf je groeien in je vak en versterk je je impact als haptonoom.
                        </Text>
                    </Box>
                    <Button color='theme-blue' w='100%' flex={1} visibleFrom='md'>Download opleidingsbrochure</Button>
                </Flex>
                <br />
                <br />
                <Stack gap='lg'>
                    {
                        Array.from({ length: 3 }).map((_, index) => <WebinarCard key={index} />)
                    }
                </Stack>
                <br />
                <Pagination currentPage={1} pageSize={10} totalPage={3} />
            </Box>
        </Container>
    )
}
