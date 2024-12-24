import { Box, Flex, Text, Title } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
import styles from '@/lib/styles/education.module.scss'
import TestimonialCard from '@/lib/components/custom/testimonial-card'

export default function EducationDetails() {
    return (
        <Box mt={{ base: 0, lg: 72 }}>
            <section className='section-divider'>
                <Flex wrap='wrap' columnGap={56} rowGap='lg'>
                    <Box>
                        <Text fw={700}>Startdatum</Text>
                        <Text> 13 februari 2022</Text>
                    </Box>
                    <Box>
                        <Text fw={700}>Prijs</Text>
                        <Text> € 6000</Text>
                    </Box>
                    <Box>
                        <Text fw={700}>Duur</Text>
                        <Text> 12 dagen</Text>
                    </Box>
                    <Box>
                        <Text fw={700}>Studiebelasting</Text>
                        <Text> 212 uur</Text>
                    </Box>
                    <Box>
                        <Text fw={700}>Studiebelasting</Text>
                        <Text> 212 uur</Text>
                    </Box>
                    <Box>
                        <Text fw={700}>Studiebelasting</Text>
                        <Text> 212 uur</Text>
                    </Box>
                </Flex>
            </section>
            <section className='section-divider' style={{ maxWidth: '70%' }}>
                <Text fw={700}>Lesdata en programma</Text>
                <br />
                <Flex justify='space-between' direction={{ base: 'column', lg: 'row' }}>
                    <Text >19-02-2022 | 9.25 uur - 16.30 uur</Text>
                    <Text >Dag 1 Voelen met je handen</Text>
                </Flex>
                <Flex justify='space-between' direction={{ base: 'column', lg: 'row' }}>
                    <Text >26-02-2022  | 9.25 uur - 16.30 uur</Text>
                    <Text >Dag 1 Voelen met je handen</Text>
                </Flex>
                <Flex justify='space-between' direction={{ base: 'column', lg: 'row' }}>
                    <Text >03-03-2022  | 9.25 uur - 16.30 uur</Text>
                    <Text >Dag 1 Voelen met je handen</Text>
                </Flex>
                <Flex justify='space-between' direction={{ base: 'column', lg: 'row' }}>
                    <Text >19-02-2022  | 9.25 uur - 16.30 uur</Text>
                    <Text >Dag 1 Voelen met je handen</Text>
                </Flex>
                <Flex justify='space-between' direction={{ base: 'column', lg: 'row' }}>
                    <Text >26-02-2022  | 9.25 uur - 16.30 uur</Text>
                    <Text >Dag 1 Voelen met je handen</Text>
                </Flex>
                <Flex justify='space-between' direction={{ base: 'column', lg: 'row' }}>
                    <Text >03-03-2022  | 9.25 uur - 16.30 uur</Text>
                    <Text >Dag 1 Voelen met je handen</Text>
                </Flex>
            </section>
            <section className='section-divider'>
                <Text fw={700}>Accreditaties</Text>
                <br />
                <Text>SKB geaccrediteerde opleiding</Text>
                <Text>CPION geaccrediteerde opleiding Post-HBO particuliere opleiding.</Text>
            </section>
            <section className='section-divider'>
                <Text fw={700}>Catering</Text>
                <br />
                <Text>Koffie, thee, koekjes</Text>
                <Text>(geen lunch)</Text>
            </section>
            <section className='section-divider'>
                <Title fw={700} order={2}>Inhoud</Title>
                <br />
                <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</Text>
                <Text>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words.</Text>
            </section>
            <section className='section-divider'>
                <Title fw={700} order={2}>Werkwijze, studiebelasting en toetsing</Title>
                <br />
                <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</Text>
                <Text>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words.</Text>
            </section>
            <section className='section-divider'>
                <Title fw={700} order={2}>Leerdoelen</Title>
                <br />
                <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</Text>
                <Text>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words.</Text>
            </section>
            <section className='section-divider'>
                <Title fw={700} order={2}>Opleidingseisen</Title>
                <br />
                <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</Text>
            </section>
            <section className='section-divider'>
                <Text fw={700}>Docenten</Text>
                <br />
                <Flex direction='column' gap={8}>
                    <Box>
                        <Flex gap={16}>
                            <Image src='/images/teacher.png' alt='teacher' width={102} height={102} className={styles.teacher_Image} />
                            <Flex direction='column' justify='space-between'>
                                <Box>
                                    <Text>Nick den Breems</Text>
                                    <Text>Kinder- en Jeugdpsycholoog, ontwikkelaar NIKA en HGD</Text>
                                </Box>
                                <Text>bekijk profiel</Text>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box>
                        <Flex gap={16}>
                            <Image src='/images/teacher.png' alt='teacher' width={102} height={102} className={styles.teacher_Image} />
                            <Flex direction='column' justify='space-between'>
                                <Box>
                                    <Text>Nick den Breems</Text>
                                    <Text>Kinder- en Jeugdpsycholoog, ontwikkelaar NIKA en HGD</Text>
                                </Box>
                                <Text>bekijk profiel</Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
            </section>
            <section className='section-divider'>
                <Title order={2}>Literatuur 1e jaar</Title>
                <br />
                <Text>Verplichte literatuur:</Text>
                <br />
                <Text>Reader basisjaar haptonomie, uitgever Synergos</Text>
                <br />
                <Text>Aanbevolen literatuur:</Text>
                <br />
                <Text>Omgaan met druk | Bob Boot</Text>
                <Text>Haptonomie kwestie van gevoel | Bob Boot</Text>
                <Text>Haptotherapie | Frans Veldman</Text>
                <Text>Levenslust en levenskunde | Frans Veldman</Text>
                <Text>Haptotherapie, praktijk en theorie | Els Plooij</Text>
                <Text>Psychologie, een inleiding | Pearson Education</Text>
                <Text>Het emotionele DNA: Gevoelens bestaan niet, ze ontstaan | Piere Capel</Text>
                <Text>Het spiegelend brein | Marco Lacoboni</Text>
                <Text>Interactiewijzer | Bob Verstegen & Henry Lodewijks</Text>
                <Text>Over kleine dingen | T.A.C.M. Gerritse</Text>
                <Text>Cirkelen rond Kolb | Jeroen Hendriksen</Text>
                <Text>Omgaan met hechtingsproblemen | Pieternel Dijkstra</Text>
            </section>
            <section className='section-divider'>
                <Title order={2}>Literatuur 2e jaar</Title>
                <br />
                <Text>Verplichte literatuur:</Text>
                <br />
                <Text>Haptonomie | Frans Veldman</Text>
                <Text>Levenslust & levenskunst | Frans Veldman</Text>
                <Text>Liefde in wonderland, overdracht en tegenoverdracht in de hulprelatie | Boswijk</Text>
                <Text>Haptotherapie, theorie & praktijk | Els Plooij</Text>
                <br />
                <Text>Aanbevolen literatuur:</Text>
                <br />
                <Text>Omgaan met druk | Bob Boot</Text>
                <Text>Haptonomie kwestie van gevoel | Bob Boot</Text>
                <Text>Haptotherapie | Frans Veldman</Text>
                <Text>Levenslust en levenskunde | Frans Veldman</Text>
                <Text>Haptotherapie, praktijk en theorie | Els Plooij</Text>
                <Text>Psychologie, een inleiding | Pearson Education</Text>
                <Text>Het emotionele DNA: Gevoelens bestaan niet, ze ontstaan | Piere Capel</Text>
                <Text>Het spiegelend brein | Marco Lacoboni</Text>
                <Text>Interactiewijzer | Bob Verstegen & Henry Lodewijks</Text>
                <Text>Over kleine dingen | T.A.C.M. Gerritse</Text>
                <Text>Cirkelen rond Kolb | Jeroen Hendriksen</Text>
                <Text>Omgaan met hechtingsproblemen | Pieternel Dijkstra</Text>
            </section>
            <section className='section-divider'>
                <Flex direction='column' gap='lg'>
                    {
                        Array.from({ length: 3 }).map((_, index) => {
                            return <TestimonialCard
                                name="Ninou Dekker"
                                profession="Fysiotherapeut"
                                rating={5}
                                testimonial="De haptonomieopleiding gaf mij handvatten om cliënten te helpen hun emoties en lichaamssignalen te leren herkennen en begrijpen. Ik werk nu op een dieper niveau met hen samen, wat het vertrouwen en de resultaten zichtbaar vergroot. Het was intensief en soms confronterend, maar absoluut de moeite waard. Deze opleiding heeft niet alleen mijn werk, maar ook mijn leven verrijkt."
                            />
                        })
                    }
                </Flex>
            </section>
        </Box>
    )
}
