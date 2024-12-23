import React from 'react';
import { Container, Grid, GridCol, Title, Text, Button } from "@mantine/core";
import Image from "next/image";
import bannerImg from '../../lib/assets/images/home_banner_img.png';

const HomeBanner = () => {
    return (
        <Container size='xl'>
            <Grid
                align="center"
                justify="space-between"
                gutter={5}
            >
                <GridCol span={{ base: 12, lg: 5 }} order={{ md: 1, base: 2 }}>
                    <Title order={1} fw={700}>Word &quot;een betere&quot; Haptonoom</Title>
                    <Text size="md" mt={47}>
                        Volg een erkende opleiding haptonomie en ontwikkel je vaardigheden in het begeleiden van anderen. Professioneel, praktischgericht en met de juiste certificering voor een succesvolle carrière in haptonomie.
                    </Text>
                    <Button radius={0} mt={40} fs='18px' color="theme-blue">Download opleidingsbrochure</Button>
                </GridCol>
                <GridCol span={{ base: 12, lg: 6 }} p='0' order={{ md: 2, base: 1 }}>
                    <Image src={bannerImg} alt="Haptonomy" className="" height={407} width={726} objectFit='contain' />
                </GridCol>
            </Grid>
        </Container>
    );
};

export default HomeBanner;