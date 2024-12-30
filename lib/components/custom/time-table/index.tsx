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
        <Table verticalSpacing="md" withRowBorders >
            <TableTbody>
                {rows.map((workshop, index) => (
                    <TableTr
                        key={index}
                        className="table-custom-row"
                    >
                        <TableTd style={{ whiteSpace: 'nowrap' }} >
                            {formatDate(workshop.date)}
                        </TableTd>
                        <TableTd >
                            <Text size="24px" fw={700} lineClamp={2}>{workshop.title}</Text>
                        </TableTd>
                        <TableTd align='center'>
                            <Text size="md" fw={700} style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                {workshop.time}
                            </Text>
                        </TableTd>
                        <TableTd align='center' >
                            <Text size="sm" fw={400}>{workshop.location}</Text>
                        </TableTd>
                        <TableTd style={{ whiteSpace: 'nowrap' }} align="right" >
                            <Button size="sm" color="theme-blue">Bekijk</Button>
                        </TableTd>
                    </TableTr>
                ))}
            </TableTbody>
        </Table>
    )
}
