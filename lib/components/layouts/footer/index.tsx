import React from 'react';
import { Container, Text, Box, GridCol, Grid, Group, Stack } from '@mantine/core';
import { IconBrandWhatsappFilled } from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../assets/images/logo.png'
import nrtoLogo from '../../../assets/images/ft_nrto_logo.png'
import faceBookIcon from '../../../assets/images/facebookIcon.png'
import linkdInIcon from '../../../assets/images/linkdinIcon.png'
import instaIcon from '../../../assets/images/instaIcon.png'

const Footer = () => {
    return (
        <Box bg='theme-black.2'>
            <Container size='xl' pt='33px' pb='60px'>
                <Grid>
                    <GridCol span={{ base: 12, md: 4 }}>
                        <Link href="/">
                            <Image src={logo} alt="Synergos Logo" width={221} height={72} />
                        </Link>
                        <Text c='white' mt={35} size="md">Regentesselaan 21</Text>
                        <Text c='white' size="md">3818HH Amersfoort</Text>
                        <Text c='white' size="md">033-4638817 | info@synergos.nl</Text>
                        <Text c='white' mt={35} size="md">KvK: 87549673</Text>
                    </GridCol>
                    <GridCol span={{ base: 12, md: 4 }}>
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
                    <GridCol span={{ base: 12, md: 4 }}>
                        <Text c='white' size='sm'>Volg ons op:</Text>
                        <Group mt='md' mb='lg'>
                            <IconBrandWhatsappFilled size={46} color='white' />
                            <Image src={linkdInIcon} alt="Logo" width={42} height={42} />
                            <Image src={faceBookIcon} alt="Logo" width={42} height={42} />
                            <Image src={instaIcon} alt="Logo" width={44} height={44} />
                        </Group>
                        <Text c='white' size="sm" mb={35}>2024 © Synergos</Text>
                        <Image src={nrtoLogo} alt="NRTO Logo" width={251} height={85} />
                    </GridCol>
                </Grid>

            </Container>
        </Box>
    );
};

export default Footer;