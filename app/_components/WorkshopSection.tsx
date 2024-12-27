import React from 'react';
import { Container, Text, Button, Table, Title, Flex, TableTbody, TableTr, TableTd, ScrollArea } from '@mantine/core';

const workshops = [
    { date: '17 jan 2025', title: 'Nascholin Adem', time: '10:00 - 17:30', location: 'Amersfoort' },
    { date: '18 jan 2025', title: 'Jaar 2 van de vakopleiding (2VO 24/25)', time: '10:00 - 17:30', location: 'Amersfoort' },
    { date: '30 jan 2025', title: 'Nascholing presentie', time: '10:00 - 17:30', location: 'Amersfoort' },
    { date: '28 Mar 2025', title: 'Opleiding zwangerschapsbegeleider', time: '10:00 - 17:30', location: 'Amersfoort' },
    { date: '15-21 Jun 2025', title: 'Haptonomisch vakmanschap', time: '10:00 - 17:30', location: 'Amersfoort' },
];

const WorkshopSection = () => {
    const formatDate = (dateStr: string) => {
        const [day, month] = dateStr.split(' ');
        return (
            <Flex direction="column">
                <Text size="24px" fw={700}>{day}</Text>
                <Text size="12px" >{month}</Text>
            </Flex >
        );
    };

    return (
        <Container size="xl" py="20px" pt={{ base: '20px', md: '40px' }}>
            <Title order={1} fw={700}>
                Blijf geinspireerd
            </Title>
            <Text size="24px" c='theme-black-2' mb='30px'>
                Workshop & nascholing
            </Text>
            <Text size="sm" mb="20px" w={{ base: 'auto', md: '820px' }}>
                Bijscholing in haptonomie houdt je als professional scherp en up-to-date met nieuwe inzichten en technieken. Het biedt de kans om je vaardigheden verder te verdiepen, nieuwe benaderingen te ontdekken, en effectiever in te spelen op de behoeften van je cliënten. Zo blijf je groeien in je vak en versterk je je impact als haptonoom.
            </Text>
            <ScrollArea w='100%' type="always" offsetScrollbars >
                <Table verticalSpacing='lg' withRowBorders={true} striped borderColor='theme-black.0' >
                    <TableTbody>
                        {workshops.map((workshop, index) => (
                            <TableTr key={index}>
                                <TableTd>{formatDate(workshop.date)}</TableTd>
                                <TableTd><Text size="24px" fw={700}>{workshop.title}</Text></TableTd>
                                <TableTd><Text size="md" fw={700}>{workshop.time}</Text></TableTd>
                                <TableTd><Text size="sm" fw={400}>{workshop.location}</Text></TableTd>
                                <TableTd><Button radius={0} size="sm" color='theme-blue'>Bekijk</Button></TableTd>
                            </TableTr >
                        ))}
                    </TableTbody >
                </Table >
            </ScrollArea>
            <Button color='theme-blue' radius={0} style={{ marginTop: '20px' }}>Bekijk de Bijscholingsmogelijkheden</Button>
        </Container >
    );
};

export default WorkshopSection;