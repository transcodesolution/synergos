import React from 'react';
import { Container, Title, Text, Button, Box, Input } from '@mantine/core';
import ColorfulLine from './ColorfulLine';

const IntroductionSection = () => {
    return (
        <>
            <Box bg='theme-orange.0' pos='relative'>
                <Container size='xl' p={{ base: '0', md: 'auto' }} w='100%'>
                    <ColorfulLine />
                </Container>
                <Container size='xl' pt='33px' pb='50px'>
                    <Title order={1} fw={700} mb='md'>
                        Maak gratis kennis met onze Haptonomie opleidingen
                    </Title>
                    <Text size="16px" fw={400} >
                        Ontvang toegang tot onze leeromgeving met introductie cursussen,<br />
                        en ontvang uitnodigingen voor onze gratis open dagen!
                    </Text>
                    <Input styles={{
                        input: {
                            borderColor: 'white',
                        }
                    }} w={{ base: '100%', md: '500px' }} mt='38px' rightSectionWidth='155px' size='md' radius='0' bg='theme-blue.0' rightSection={<Button color='theme-blue' h='100%' radius='0' w='100%'>Inschrijven</Button>} />
                </Container>
            </Box >
        </>
    );
};

export default IntroductionSection;