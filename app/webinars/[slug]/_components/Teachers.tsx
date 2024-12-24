import TeacherCard from '@/lib/components/custom/teacher-card'
import { Grid, GridCol } from '@mantine/core'
import React from 'react'

interface ITeacher {
    size?: number
}
export default function Teachers({ size = 9 }: ITeacher) {
    return (
        <Grid>
            {Array.from({ length: size }).map((_, index) =>
                <GridCol span={{ base: 6, md: 4 }}>
                    <TeacherCard key={index} />
                </GridCol>
            )}
        </Grid>
    )
}
