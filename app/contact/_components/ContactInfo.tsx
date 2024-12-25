import { Box, Stack, Text, Title } from '@mantine/core'
import React from 'react'

export default function ContactInfo() {
    return (
        <Stack>
            <Box>
                <Title order={6}>Leslocatie</Title>
                <Text>Regentesselaan 21</Text>
                <Text>3818HH Amersfoort</Text>
            </Box>
            <Box>
                <Title order={6}>Telefoonnummer</Title>
                <Text>033-4638817 | ma - vrij 10:00 - 16:00 </Text>
            </Box>
            <Box>
                <Title order={6}>E-mailadres</Title>
                <Text>info@synergos.nl</Text>
            </Box>
            <Box>
                <Title order={6}>KVK en BTW</Title>
                <Text>87546973</Text>
            </Box>
        </Stack>
    )
}
