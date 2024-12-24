import { Button, Flex, Table, TableTbody, TableTd, TableTr, Text } from '@mantine/core';
import React from 'react'

interface ITableEntry {
    date: string;
    title: string;
    time: string;
    location: string;
}

interface ITimeTable {
    rows: ITableEntry[]
}

export default function TimeTable({ rows }: ITimeTable) {
    const formatDate = (dateStr: string) => {
        const [day, month] = dateStr.split(' ');
        return (
            <Flex direction="column">
                <Text size="24px" fw={700}>{day}</Text>
                <Text size="12px" >{month}</Text>
            </Flex>
        );
    };

    return (
        <Table verticalSpacing='lg' withRowBorders={true} borderColor='theme-black.0' >
            <TableTbody>
                {rows.map((workshop, index) => (
                    <TableTr key={index}>
                        <TableTd pl={0}>{formatDate(workshop.date)}</TableTd>
                        <TableTd><Text size="24px" fw={700}>{workshop.title}</Text></TableTd>
                        <TableTd><Text size="md" fw={700}>{workshop.time}</Text></TableTd>
                        <TableTd><Text size="sm" fw={400}>{workshop.location}</Text></TableTd>
                        <TableTd align='right' pr={0}><Button size="sm" color='theme-blue'>Bekijk</Button></TableTd>
                    </TableTr >
                ))}
            </TableTbody >
        </Table>
    )
}
