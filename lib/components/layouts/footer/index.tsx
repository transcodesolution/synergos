import React from 'react';
import { Container, Text, Box, GridCol, Grid, Group, Stack } from '@mantine/core';
import { IconBrandWhatsappFilled } from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <Box bg='theme-black.2'>
            <Container size='xl' pt='33px' pb='60px'>
                <Grid>
                    <GridCol span={{ base: 12, md: 4, lg: 4 }}>
                        <Link href="/">
                            <Image src='/images/site-logo.png' alt="Synergos Logo" width={221} height={72} />
                        </Link>
                        <Text c='white' mt={35} size="md">Regentesselaan 21</Text>
                        <Text c='white' size="md">3818HH Amersfoort</Text>
                        <Text c='white' size="md">033-4638817 | info@synergos.nl</Text>
                        <Text c='white' mt={35} size="md">KvK: 87549673</Text>
                    </GridCol>
                    <GridCol span={{ base: 12, md: 4, lg: 5 }}>
                        <Link href="/">
                            <Text size="md" c="white">NRTO-algemene voorwaarden</Text>
                        </Link>
                        <Link href="/">
                            <Text size="md" c="white">Geschillencommissie</Text>
                        </Link>
                        <Link href="/">
                            <Text size="md" c="white">Gedragscode</Text>
                        </Link>
                        <Link href="/">
                            <Text size="md" c="white">Cookieverklaring</Text>
                        </Link>
                        <Link href="/">
                            <Text size="md" c="white">Algemene voorwaarden</Text>
                        </Link>
                        <Link href="/">
                            <Text size="md" c="white">Privacy verklaring</Text>
                        </Link>
                        <Stack mt={45} gap='0' >
                            <Link href="/" >
                                <Text size="md" c="white">Uitschrijven</Text>
                            </Link>
                            <Link href="/">
                                <Text size="md" c="white">Sitemap</Text>
                            </Link>
                        </Stack>
                    </GridCol>
                    <GridCol span={{ base: 12, md: 4, lg: 3 }} >
                        <Text c='white' size='sm'>Volg ons op:</Text>
                        <Group mt='md' mb='lg' gap={25}>
                            <IconBrandWhatsappFilled size={50} color='white' />
                            <Image src='/images/Icons/linkedIn.png' alt="Logo" width={42} height={42} />
                            <Image src='/images/Icons/facebook.png' alt="Logo" width={42} height={42} />
                            <Image src='/images/Icons/instagram.png' alt="Logo" width={44} height={44} />
                        </Group>
                        <Text c='white' size="sm" mb={35}>2024 © Synergos</Text>
                        <Image src='/images/Icons/nrto.png' alt="NRTO Logo" width={251} height={85} />
                    </GridCol>
                </Grid>

            </Container>
        </Box>
    );
};

export default Footer;