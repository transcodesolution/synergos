import { Button, Container, Grid, GridCol, Text, Box, Title, Flex, rem } from "@mantine/core";
import Image from "next/image";
import React from "react";
import cardImage1 from '../../lib/assets/images/card_image_1.png'
import { IconStarFilled } from "@tabler/icons-react";
import Rating from "@/lib/components/custom/ratting";

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
    <Box className="section_Divider" bg='theme-orange.0'>
        <Container size="xl" >
            <Title c='theme-black.2' fw={400} order={3} lh={{ base: rem(20), md: rem(50) }}>
                Help mensen beter in contact te komen met zichzelf en anderen . <br />
                Ontdek hoe je mensen kunt begeleiden in een bewuster en voller leven
            </Title>

            <Grid gutter={{ base: "xl", md: "lg", lg: "36" }} >
                {courses.map((course, index) => (
                    <GridCol span={{ base: 12, lg: 4 }} key={index} >
                        <Title c="theme-black.2" mb='sm' order={3} lineClamp={2} mih={rem(80)}>{course.title}</Title>
                        <Text c="theme-black.2" mb='sm' size="16px">{course.subTitle}</Text>
                        <Flex align='center' gap='sm' mb='sm'>
                            <Rating rating={5} />
                            <Text c="theme-black.2" size="16px">{course.reviews} reviews</Text>
                        </Flex>
                        <Image src={course.image} alt={course.title} height={160} width={355} />
                        <br />
                        <Text c="theme-black.2" lh={{ base: rem(20), md: rem(24) }} mih={rem(72)}>{course.description}</Text>
                        <br />
                        <Text size="sm" c="theme-orange.1">Eerst start: {course.startDate}</Text>
                        <br />
                        <Button color="theme-blue" w='auto'>Bekijk opleiding</Button>
                    </GridCol>
                ))}
            </Grid>
        </Container>
    </Box >
);
