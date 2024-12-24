import React from 'react';
import { Box, Text, Flex, Title } from '@mantine/core';
import Image from 'next/image';
import Rating from '../ratting';

interface TestimonialCardProps {
    name: string;
    profession: string;
    rating: number;
    testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, profession, rating, testimonial }) => {

    return (
        <Box bg='theme-black.0' p={{ base: 'sm', lg: 'lg' }}>
            <Title fw={700} order={5}>{name} - {profession}</Title>
            <Flex mt='xs' gap='sm' align='center'>
                <Rating rating={5} />
                <Text size="xxl" c="theme-black.2">({rating})</Text>
            </Flex>
            <Flex gap='lg' mt='xl' direction={{ base: 'column', lg: 'row' }}>
                <Image alt='testimonalImg' src='/images/teacher.png' width={132} height={132} style={{ width: '132px', height: '132px' }} />
                <Text c="theme-black.2">
                    “{testimonial}”
                </Text>
            </Flex>
        </Box>
    );
};

export default TestimonialCard;