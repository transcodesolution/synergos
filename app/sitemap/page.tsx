import { Box, Container, List, ListItem, rem, Text, Title } from '@mantine/core'
import React from 'react'


interface ISitemap {
    label: string;
    childPath: ISitemap[] | null;
};

const sitemapDate: ISitemap[] = [
    {
        label: 'Home',
        childPath: [
            {
                label: 'Opleidingen',
                childPath: [
                    {
                        label: 'Basisjaar Haptonomie (1 Jaar)',
                        childPath: null
                    }
                ]
            }
        ]
    }
]
export default function Sitemap() {
    const displaySiteMap = ({ label, childPath }: ISitemap, round: number) => {
        if (!childPath) return <ListItem key={label} ml={rem(16 * round)}>{label}</ListItem>
        return <Box>
            <Text ml={rem(16 * round)}>{label}</Text>
            {
                childPath?.map((childPath) => displaySiteMap(childPath, round + 1))
            }
        </Box>
    }
    return (
        <Container size='xl'>
            <section className='section_Divider'>
                <Title order={1}>Sitemap </Title>
                <Title order={4} fw={400}>Alle pagina's op rij</Title>
                <br />
                <List>
                    {
                        sitemapDate.map((siteMap) => displaySiteMap(siteMap, 0))
                    }
                </List>
            </section>
        </Container>
    )
}
