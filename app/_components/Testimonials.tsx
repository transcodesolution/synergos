import React from 'react';
import { Container } from '@mantine/core';
import TestimonialCard from './TestimonialCard'; // Adjust the path as necessary

const testimonialsData = [
    {
        name: "NINOU DEKKER",
        profession: "FYSIOTHERAPEUT",
        rating: 5,
        testimonial: "De haptonomieopleiding gaf mij handvatten om cliënten te helpen hun emoties en lichaamssignalen te leren herkennen en begrijpen. Ik werk nu op een dieper niveau met hen samen, wat het vertrouwen en de resultaten zichtbaar vergroot. Het was intensief en soms confronterend, maar absoluut de moeite waard. Deze opleiding heeft niet alleen mijn werk, maar ook mijn leven verrijkt."
    },

];

const Testimonials = () => {
    return (
        <Container size='xl' py='40px'>
            {testimonialsData.map((testimonial, index) => (
                <TestimonialCard
                    key={index}
                    name={testimonial.name}
                    profession={testimonial.profession}
                    rating={testimonial.rating}
                    testimonial={testimonial.testimonial}
                />
            ))}
        </Container>
    );
};

export default Testimonials;