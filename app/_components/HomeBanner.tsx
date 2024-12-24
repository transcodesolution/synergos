import React from 'react';
import { Container, Grid, GridCol, Title, Text, Button, Stack, Box, Flex } from "@mantine/core";
import Image from "next/image";
import bannerImg from '../../lib/assets/images/home_banner_img.png';

const HomeBanner = () => {
    return (
        <Container size='xl'>
            <Flex className='section_Divider' gap='md' direction={{ base: 'column-reverse', md: 'row' }}>
                <Stack justify='space-between' flex={2}>
                    <Box>
                        <Title order={1} fw={700}>Word &quot;een betere&quot; Haptonoom</Title>
                        <br />
                        <Text>
                            Volg een erkende opleiding haptonomie en ontwikkel je vaardigheden in het begeleiden van anderen. Professioneel, praktischgericht en met de juiste certificering voor een succesvolle carrière in haptonomie.
                        </Text>
                    </Box>
                    <Button size='lg' fw={700} color="theme-blue">Download opleidingsbrochure</Button>
                </Stack>
                <Image src={bannerImg} alt="Haptonomy" className="" height={407} width={726} objectFit='contain' style={{ flex: 3 }} />
            </Flex>
        </Container>
    );
};

export default HomeBanner;