import { Button, Flex } from '@mantine/core';
import React from 'react';

interface IPagination {
    totalPage: number;
    currentPage: number;
    pageSize: number;
}

export default function Pagination({ totalPage, currentPage }: IPagination) {
    return (
        <Flex gap={8}>
            {Array.from({ length: totalPage }).map((_, index) => (
                <Button variant={index + 1 === currentPage ? 'filled' : 'outline'} color='theme-orange' key={index}>{index + 1}</Button>
            ))}
        </Flex>
    );
}