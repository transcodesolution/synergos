'use client'

import React from 'react';
import { Container, TextInput, Button, Text, AppShell, Flex, Drawer, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
// import logo from '../../../assets/images/site-logo.png'
import { IconSearch, IconSquareRoundedX } from '@tabler/icons-react';
import Link from 'next/link';

export default function Header() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell>
            <AppShell.Header bg='theme-black'> {/* Main header color */}
                <Flex bg='theme-orange' justify='center' align='center' py='xs' px={{ md: 'xs', sm: '0' }}>
                    <Text c="white" fw={400} >Open dag Haptonomie op 12-06-2025 in Amersfoort.</Text>
                </Flex>
                <Container size='xl' py='sm'>
                    <Flex align='center' justify='space-between' hiddenFrom='md'>
                        <Link href="/">
                            <Image src='/images/site-logo.png' alt="Synergos Logo" width={100} height={33} />
                        </Link>
                        <Button onClick={toggle} variant="outline" color="white" >Menu</Button>
                    </Flex>
                    <Stack visibleFrom='md'>
                        <Flex align='center' justify='space-between' >
                            <Text c="white" opacity='50%' size="md" fw={400}>033-4638817 | ma - vrij 10:00 - 16:00 </Text>
                            <TextInput
                                placeholder="Zoeken..."
                                rightSection={<IconSearch size={16} />}
                                w={360}
                                radius={5}
                            />
                            <Flex gap={20}>
                                <Text c="white" opacity='50%' fw={400}>Opleidingen</Text>
                                <Text c="white" opacity='50%' fw={400}>Nascholing</Text>
                                <Text c="white" opacity='50%' fw={400}>Workshops</Text>
                            </Flex>
                        </Flex>
                        <Flex pb='xs' align='center' justify='space-between'>
                            <Link href="/">
                                <Image src='/images/site-logo.png' alt="Synergos Logo" width={221} height={72} />
                            </Link>
                            <Link href="/education">
                                <Text c="white" fw='800'>Opleidingen</Text>
                            </Link>
                            <Link href="/nascholing">
                                <Text c="white" fw='800'>Nascholing</Text>
                            </Link>
                            <Link href="/workshops">
                                <Text c="white" fw='800'>Workshops</Text>
                            </Link>
                            <Link href="/agenda">
                                <Text c="white" fw='800'>Agenda</Text>
                            </Link>
                            <Link href="/webinars">
                                <Text c="white" fw='800'>Webinars</Text>
                            </Link>
                            <Button variant="outline" color="white" >Mijn Synergos</Button>
                        </Flex>
                    </Stack>

                </Container>

            </AppShell.Header>
            <Drawer
                opened={opened}
                onClose={toggle}
                padding="md"
                size="md"
                closeButtonProps={{
                    icon: <IconSquareRoundedX size={24} />,
                }}

                position='right'
            // styles={{ drawer: { backgroundColor: '#333', color: 'white' } }} // Customize drawer styles
            >
                <Flex direction="column" align="flex-start" gap="md">
                    <Text c='theme-black' fw='800'>Opleidingen</Text>
                    <Text c='theme-black' fw='800'>Nascholing</Text>
                    <Text c='theme-black' fw='800'>Workshops</Text>
                    <Text c='theme-black' fw='800'>Agenda</Text>
                    <Text c='theme-black' fw='800'>Webinars</Text>
                    <Button variant="outline" color='theme-black.2'>Mijn Synergos</Button>

                    <Text c="theme-black.3" opacity='50%' fw={400}>Opleidingen</Text>
                    <Text c="theme-black.3" opacity='50%' fw={400}>Nascholing</Text>
                    <Text c="theme-black.3" opacity='50%' fw={400}>Workshops</Text>
                </Flex>
            </Drawer>
        </AppShell >
    );
}