import React from 'react';
import { Box, Container, Stack } from '@mantine/core';
import TestimonialCard from '@/lib/components/custom/testimonial-card';

const testimonialsData = [
    {
        name: "NINOU DEKKER",
        profession: "FYSIOTHERAPEUT",
        rating: 5,
        testimonial: "De haptonomieopleiding gaf mij handvatten om cliënten te helpen hun emoties en lichaamssignalen te leren herkennen en begrijpen. Ik werk nu op een dieper niveau met hen samen, wat het vertrouwen en de resultaten zichtbaar vergroot. Het was intensief en soms confronterend, maar absoluut de moeite waard. Deze opleiding heeft niet alleen mijn werk, maar ook mijn leven verrijkt."
    },
    {
        name: "NINOU DEKKER",
        profession: "FYSIOTHERAPEUT",
        rating: 5,
        testimonial: "De haptonomieopleiding gaf mij handvatten om cliënten te helpen hun emoties en lichaamssignalen te leren herkennen en begrijpen. Ik werk nu op een dieper niveau met hen samen, wat het vertrouwen en de resultaten zichtbaar vergroot. Het was intensief en soms confronterend, maar absoluut de moeite waard. Deze opleiding heeft niet alleen mijn werk, maar ook mijn leven verrijkt."
    },

];

const Testimonials = () => {
    return (
        <Container size='xl'>
            <Box className="section_Divider">
                <Stack gap='sm'>
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            profession={testimonial.profession}
                            rating={testimonial.rating}
                            testimonial={testimonial.testimonial}
                        />
                    ))}
                </Stack>
            </Box>
        </Container>
    );
};

export default Testimonials;