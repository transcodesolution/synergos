import React from 'react';
import { Box, Text, Flex, Title, Grid, GridCol } from '@mantine/core';
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
            <Grid mt='xl' >
                <GridCol span={{ base: 12, md: 2, lg: 1.5, sm: 2 }}>
                    <Image alt='testimonalImg' src='/images/teacher.png' width={132} height={132} />
                </GridCol>
                <GridCol span={{ base: 12, md: 10, lg: 10.5, sm: 10.8 }}>
                    <Text lh='30px' c="theme-black.2" >
                        “{testimonial}”
                    </Text>
                </GridCol>
            </Grid>
        </Box>
    );
};

export default TestimonialCard;