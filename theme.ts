'use client';

import { Button, createTheme, rem } from '@mantine/core';

export const theme = createTheme({
    fontFamily: 'var(--font-catamaran-sans)',
    colors: {
        'theme-orange': ['#FFF4EF', '#ED6E37', '#ED6E37', '#ED6E37', '#ED6E37', '#ED6E37', '#ED6E37', '#ED6E37', '#ED6E37', '#ED6E37'],
        'theme-black': ['#F8F8F8', '#B0B0B0', '#293133', '#3A3A3A', '#293133', '#293133', '#293133', '#293133', '#EEEEEE', '#293133'],
        'theme-blue': ['#F5FCFF', '#dee2f2', '#bdc2de', '#98a0ca', '#3BA5DB', '#3BA5DB', '#3BA5DB', '#3BA5DB', '#3BA5DB', '#3BA5DB'],
        'theme-red': ['#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000'],
    },
    components: {
        Button: Button.extend({
            defaultProps: {
                radius: 0
            }
        })
    },
    fontSizes: {
        xxl: rem(24)
    },
    headings: {
        sizes: {
            h1: {
                fontSize: rem(50),
                lineHeight: rem(60)
            },
            h2: {
                fontSize: rem(36)
            },
            h3: {
                fontSize: rem(30)
            },
            h4: {
                fontSize: rem(24)
            },
            h5: {
                fontSize: rem(20)
            },
            h6: {
                fontSize: rem(16)
            }
        }
    }
});