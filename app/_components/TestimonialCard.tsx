import React from 'react';
import { Box, Text, Flex } from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';
import testimonalImg from '../../lib/assets/images/testimonalImg.png'
import Image from 'next/image';

interface TestimonialCardProps {
    name: string;
    profession: string;
    rating: number;
    testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, profession, rating, testimonial }) => {

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <IconStarFilled color={i < rating ? '#ED6E37' : '#000'} size={18} />
            );
        }
        return stars;
    };

    return (
        <Box bg='theme-black.0' pt='32px' pb='79px' px='40px'>
            <Text size="20px" fw={700}>{name} - {profession}</Text>
            <Flex mt={5} gap='sm' mb='22px'>
                {renderStars(rating)}
                <Text size="24px" c="theme-black.2">({rating})</Text>
            </Flex>
            <Flex gap='lg'>
                <Image alt='testimonalImg' src={testimonalImg} width={132} height={132} />
                <Text lh="35px" c="theme-black.2" size="16px" >
                    “{testimonial}”
                </Text>
            </Flex>
        </Box>
    );
};

export default TestimonialCard;