import React from 'react';
import { Container, Title, Grid, GridCol, Box } from '@mantine/core';
import assocVvhLog from '../../lib/assets/images/assoc_vvh_logo.png'
import assocNederlandenLogo from '../../lib/assets/images/assoc_nederland_logo.png'
import assocTransparentLogo from '../../lib/assets/images/assoc_transparent_logo.png'
import assocVhzbLogo from '../../lib/assets/images/assoc_vhzb_logo.png'
import Image from 'next/image';


const AssociationsSection = () => {

    return (
        <Container size='xl'>
            <Box className="section_Divider">
                <Title order={2} mb="24px">
                    Verbonden aan de volgende beroepsverenigingen
                </Title>
                <Grid align='center'>
                    <GridCol span={{ base: 6, md: 3 }}  >
                        <Image src={assocVvhLog} alt='VVH' width={256} height={80} />
                    </GridCol>
                    <GridCol span={{ base: 6, md: 3 }}  >
                        <Image src={assocTransparentLogo} alt='NVPA' width={161} height={86} />
                    </GridCol>
                    <GridCol span={{ base: 6, md: 3 }}  >
                        <Image src={assocNederlandenLogo} alt='Nederlandse' width={108} height={80} />
                    </GridCol>
                    <GridCol span={{ base: 6, md: 3 }}  >
                        <Image src={assocVhzbLogo} alt='VHZB' width={200} height={80} />
                    </GridCol>
                </Grid>
            </Box>
        </Container>
    );
};

export default AssociationsSection;