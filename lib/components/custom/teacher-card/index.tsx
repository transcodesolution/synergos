import { Stack, Text, Title } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TeacherCard() {
    return (
        <Stack>
            <Link href='/teacher/1'>
                <Image src='/images/teacher-male.png' alt='teacher' height={350} width={350} />
            </Link>
            <Title order={3}>Nico Pronk</Title>
            <Text>Docent...</Text>
        </Stack>
    )
}
