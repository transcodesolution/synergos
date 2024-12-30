'use client'
import { Button, Flex, Grid, GridCol, Group, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function ContactForm() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            surname: '',
            email: '',
            message: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    return (
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Grid>
                <GridCol span={{ base: 12, md: 2 }}>
                    <label htmlFor='input_Name'>Voornaam:</label>
                </GridCol>
                <GridCol span={{ base: 12, md: 10 }}>
                    <TextInput
                        id='input_Name'
                        key={form.key('name')}
                        {...form.getInputProps('name')}
                    />
                </GridCol>

                <GridCol span={{ base: 12, md: 2 }}>
                    <label htmlFor='input_Surname'>Achternaam:</label>
                </GridCol>
                <GridCol span={{ base: 12, md: 10 }}>
                    <TextInput
                        id='input_Surname'
                        key={form.key('surname')}
                        {...form.getInputProps('surname')}
                    />
                </GridCol>

                <GridCol span={{ base: 12, md: 2 }}>
                    <label htmlFor='input_Email'>Email:</label>
                </GridCol>
                <GridCol span={{ base: 12, md: 10 }}>
                    <TextInput
                        id='input_Email'
                        key={form.key('email')}
                        {...form.getInputProps('email')}
                    />
                </GridCol>

                <GridCol span={{ base: 12, md: 2 }}>
                    <label htmlFor='input_Message'>Bericht:</label>
                </GridCol>
                <GridCol span={{ base: 12, md: 10 }}>
                    <Textarea
                        id='input_Message'
                        key={form.key('message')}
                        {...form.getInputProps('message')}
                    />
                </GridCol>
            </Grid>

            <Group justify="flex-end" mt="md">
                <Button type="submit" color='theme-blue' w={{ base: '100%', md: 'auto' }} size='lg'>Verstuur bericht</Button>
            </Group>
        </form>
    );
}