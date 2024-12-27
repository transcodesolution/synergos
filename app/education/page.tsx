import Rating from '@/lib/components/custom/ratting'
import { Box, Container, Flex, Grid, GridCol, Text, Title } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
import EducationDetails from './_components/EducationDetails'
import EducationSidebar from './_components/EducationSidebar'
import styles from '@/lib/styles/education.module.scss'
export default function Education() {
    return (
        <section>
            <Box pos='relative'>
                <Image src='/images/education_banner.png' alt='Education Banner' width={1920} height={960} className={styles.banner_Image} />
                <Box pos='absolute' top={{ base: '50%', md: '35%' }} w='100%'>
                    <Container size='xl'>
                        <Flex p={{ base: 'sm', lg: 'xl' }} bg='var(--mantine-color-theme-orange-0)' maw={667} gap={{ base: 12, lg: 56 }} direction='column'>
                            <Title order={1} >
                                Basisjaa Haptonomie
                                <br />
                                (1 Jaar)
                            </Title>
                            <Box>
                                <Text>Volg een erkende opleiding haptonomie en ontwikkel je vaardigheden in het begeleiden van anderen. Professioneel, praktijkgericht en met de juiste certificering voor een succesvolle carrière in haptonomie."</Text>
                                <Flex gap={16} py={8}>
                                    <Rating rating={5} />
                                    <Text fw={700} c='theme-orange'>25 reviews</Text>
                                    <Text fw={700} c='theme-red' display={{ base: 'none', lg: 'block' }}>Pas zichtbaar na 5 reviews</Text>
                                </Flex>
                            </Box>
                        </Flex>
                    </Container>
                </Box>
            </Box>
            <Container size='lg' py={16}>
                <Flex gap={16} direction={{ base: 'column-reverse', lg: 'row' }}>
                    <Box flex={5}>
                        <EducationDetails />
                    </Box>
                    <Box flex={2}>
                        <EducationSidebar />
                    </Box>
                </Flex>
            </Container>
        </section>
    )
}
