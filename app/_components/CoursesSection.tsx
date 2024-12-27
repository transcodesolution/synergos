import { Button, Container, Grid, GridCol, Text, Box, Title, Flex } from "@mantine/core";
import Image from "next/image";
import React from "react";
import cardImage1 from '../../lib/assets/images/card_image_1.png'
import { IconStarFilled } from "@tabler/icons-react";

const courses = [
    {
        title: "Basisjaar haptonomie",
        subTitle: "Voor als je in stappen Haptonoom wilt worden",
        description: "Tijdens het basisjaar haptonomie wisselen theorie en praktijk elkaar af in een boeiend programma vol verdieping en persoonlijke ontwikkeling.",
        startDate: "12-06-2025",
        image: cardImage1, // Replace with actual image path
        reviews: 25,
    },
    {
        title: "Erkende opleiding haptonomie",
        subTitle: "De volledige vierjarige opleiding",
        description: "Heb je HBO werk- en denkniveau en is werken met mensen je grote passie? Verdiep je graag in anderen en ben je nieuwsgierig naar wat mensen drijft?",
        startDate: "12-06-2025",
        image: cardImage1, // Replace with actual image path
        reviews: 25,
    },
    {
        title: "Professional haptonomie binnen jouw vakgebied",
        subTitle: "Toegepast op de omgeving waarin jij werkt",
        description: "Een haptonomisch professional zet zijn/haar opgedane haptonomische kennis in binnen zijn eigen vakgebied.",
        startDate: "12-06-2025",
        image: cardImage1, // Replace with actual image path
        reviews: 25,
    },
];

export const CoursesSection = () => (
    <Box mt={50} bg='theme-orange.0' pt='sm' pb='lg'>
        <Container size="xl" >
            <Text c='theme-black.2' fw={400} size='1.875rem' mb={20} lh='3.125rem' >
                Help mensen beter in contact te komen met zichzelf en anderen . <br />
                Ontdek hoe je mensen kunt begeleiden in een bewuster en voller leven
            </Text>

            <Grid gutter={{ base: "xl", md: "lg", lg: "36" }}>
                {courses.map((course, index) => (
                    <GridCol span={{ base: 12, lg: 4 }} key={index} p={20}>
                        <Title c="theme-black.2" order={3} lineClamp={2} h={{ base: 'auto', md: "60px" }}>{course.title}</Title>
                        <Text c="theme-black.2" my='sm' size="16px">{course.subTitle}</Text>
                        <Flex align='center' gap='sm' mb='md'>
                            <IconStarFilled color="#ED6E37" size={24} />
                            <IconStarFilled color="#ED6E37" size={24} />
                            <IconStarFilled color="#ED6E37" size={24} />
                            <IconStarFilled color="#ED6E37" size={24} />
                            <IconStarFilled size={24} color="#ED6E37" />
                            <Text c="theme-black.2" size="16px">{course.reviews} reviews</Text>
                        </Flex>
                        <Image src={course.image} alt={course.title} height={160} width={355} />
                        <Text mt="sm" c="theme-black.2" size="16px" h='96px' lh='24px'>{course.description}</Text>
                        <Text size="sm" mt="sm" c="theme-orange.1">Eerst start: {course.startDate}</Text>
                        <Button color="theme-blue" mt="md" c="white" w='auto' radius={0}>
                            Bekijk opleiding
                        </Button>
                    </GridCol>
                ))}
            </Grid>
        </Container>
    </Box >
);
