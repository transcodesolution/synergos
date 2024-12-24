import { rem, Text } from '@mantine/core'
import React from 'react'

interface IQuote {
    quote: string
}
export default function Quote({ quote }: IQuote) {
    return (
        <Text lh={{ base: rem(20), md: rem(80) }} size={rem(60)} fw={300}> <q>{quote}</q></Text>
    )
}
