import { Flex } from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';
import React from 'react';

interface IRating {
    rating: number;
}

const RATING_LENGTH = 5;

export default function Rating({ rating }: IRating) {
    return (
        <Flex>
            {Array.from({ length: RATING_LENGTH }).map((_, index) => (
                <IconStarFilled
                    key={index}
                    fill={index < rating ? 'var(--mantine-color-theme-orange-5)' : 'none'}
                    size={24}
                />
            ))}
        </Flex>
    );
}