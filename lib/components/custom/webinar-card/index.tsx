import { Box, Stack, Text, Title } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function WebinarCard() {
    return (
        <Stack gap='md'>
            <Title order={2}>Intuïtie versus gevoel</Title>
            <Link href='/webinars/1'><Image src='/images/webinar.png' alt='webinar' height={700} width={1200} /></Link>
            <Box>
                <Text>Intuïtie; een zuivere vorm van voelen? Wij, gevoelswetenschappers zijn van mening dat gevoel en intuïtie verder van elkaar afliggen dan je zou denken.</Text>
                <Text>Voelen gaat over de beleving van hier en nu, aangevuld met ervaring van het verleden en verwachtingen over de toekomst. Gevoelens ontstaan op grond van het feit dat we direct omgaan met onze omgeving. Gevoel staat dichtbij het leven van alledag.</Text>
                <Text>Intuïtie is een ingeving, een soort weten wat je nog niet eerder wist, of in ieder geval wist je niet dat je het wist. Over de herkomst van intuïtie bestaan verschillende ideeën.</Text>
                <Text>Intuïtie komt uit een volledig andere bron dan de gevoelsbron. Als je intuïtiever wilt worden, is het zelfs belangrijk dat je je gevoel op een laag pitje kunt zetten.</Text>
                <br />
                <Text>0:00:00 | webinar live</Text>
                <Text>0:09:08 | Introducties</Text>
                <Text>0:11:08 | Is intuïtie voor jou het zelfde als gevoel?</Text>
                <Text>0:23:03 | Als je het hebt over intuïtieve ervaringen, wat is voor jou dan intuïtie?</Text>
                <Text>0:32:00 | Verschillende benamingen van intuïtie</Text>
                <Text>0:46:37 | Iets weten waarvan je denkt dat je het eigenlijk niet kan weten...</Text>
                <Text>0:50:00 | Kunnen we intuïtie in het leven plaatsen</Text>
                <Text>1:12:11 | Wat helpt jou om intuïtief te zijn</Text>
            </Box>
        </Stack >
    )
}
