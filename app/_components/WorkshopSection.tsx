import React from 'react';
import { Container, Text, Button, Title, Box } from '@mantine/core';
import TimeTable from '@/lib/components/custom/time-table';

export const workshopsData = [
    { date: '17 jan 2025', title: 'Nascholin Adem', time: '10:00 - 17:30', location: 'Amersfoort' },
    { date: '18 jan 2025', title: 'Jaar 2 van de vakopleiding (2VO 24/25)', time: '10:00 - 17:30', location: 'Amersfoort' },
    { date: '30 jan 2025', title: 'Nascholing presentie', time: '10:00 - 17:30', location: 'Amersfoort' },
    { date: '28 Mar 2025', title: 'Opleiding zwangerschapsbegeleider', time: '10:00 - 17:30', location: 'Amersfoort' },
    { date: '15-21 Jun 2025', title: 'Haptonomisch vakmanschap', time: '10:00 - 17:30', location: 'Amersfoort' },
];

const WorkshopSection = () => {
    return (
        <Container size="xl">
            <Box className="section_Divider">
                <Title order={1} fw={700}>
                    Blijf geinspireerd
                </Title>
                <Title order={4} c='theme-black-2'>
                    Workshop & nascholing
                </Title>
                <br />
                <Text size="sm">
                    Bijscholing in haptonomie houdt je als professional scherp en up-to-date met nieuwe inzichten en technieken. Het biedt de kans om je vaardigheden verder te verdiepen, nieuwe benaderingen te ontdekken, en effectiever in te spelen op de behoeften van je cliënten. Zo blijf je groeien in je vak en versterk je je impact als haptonoom.
                </Text>
                <TimeTable rows={workshopsData} />
                <br />
                <Button color='theme-blue'>Bekijk de Bijscholingsmogelijkheden</Button>
            </Box>
        </Container >
    );
};

export default WorkshopSection;