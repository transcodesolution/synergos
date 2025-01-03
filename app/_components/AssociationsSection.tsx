import React from 'react';
import { Container, Title, Grid, GridCol, Box } from '@mantine/core';
import Image from 'next/image';


const AssociationsSection = () => {

    return (
        <Container size='xl'>
            <Box className="section_Divider">
                <Title order={2} mb="24px">
                    Verbonden aan de volgende beroepsverenigingen
                </Title>
                <Grid align='center'>
                    <GridCol span={{ base: 6, md: 3 }} >
                        <Image src='/images/associationsIcons/vvh.png' alt='VVH' width={256} height={80} />
                    </GridCol>
                    <GridCol span={{ base: 6, md: 3 }} >
                        <Image src='/images/associationsIcons/transparent.png' alt='NVPA' width={161} height={86} />
                    </GridCol>
                    <GridCol span={{ base: 6, md: 3 }} >
                        <Image src='/images/associationsIcons/nederland.png' alt='Nederlandse' width={108} height={80} />
                    </GridCol>
                    <GridCol span={{ base: 6, md: 3 }} >
                        <Image src='/images/associationsIcons/vhzb.png' alt='VHZB' width={200} height={80} />
                    </GridCol>
                </Grid>
            </Box>
        </Container>
    );
};

export default AssociationsSection;