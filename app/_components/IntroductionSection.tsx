import React from 'react';
import { Container, Title, Text, Button, Box, Input } from '@mantine/core';
import ColorfulLine from './ColorfulLine';

const IntroductionSection = () => {
    return (
        <Box bg='theme-orange.0' pos='relative'>
            <Container size='xl' w='100%'>
                <ColorfulLine />
            </Container>
            <Container size='xl' className='section_Divider'>
                <Title order={1} fw={700} mb='md'>
                    Maak gratis kennis met onze Haptonomie opleidingen
                </Title>
                <Text fw={400} >
                    Ontvang toegang tot onze leeromgeving met introductie cursussen,<br />
                    en ontvang uitnodigingen voor onze gratis open dagen!
                </Text>
                <br />
                <Input
                    placeholder='naam@domein.nl'
                    styles={{
                        input: {
                            borderColor: 'white',
                        }
                    }} w={{ base: '100%', md: '500px' }} rightSectionWidth='155px' size='md' radius='0' bg='theme-blue.0' rightSection={<Button color='theme-blue' h='100%' w='100%'>Inschrijven</Button>} />
            </Container>
        </Box>
    );
};

export default IntroductionSection;