'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
    fontFamily: 'var(--font-catamaran-sans)',
    colors: {
        'theme-orange': ['#FFF4EF', '#ED6E37', '#ED6E37', '#ED6E37', '#ED6E37', '#ED6E37', '#ED6E37', '#ED6E37', '#ED6E37', '#ED6E37'],
        'theme-black': ['#F8F8F8', '#B0B0B0', '#293133', '#3A3A3A', '#293133', '#293133', '#293133', '#293133', '#EEEEEE', '#293133', '#293133'],
        'theme-blue': ['#F5FCFF', '#dee2f2', '#bdc2de', '#98a0ca', '#3BA5DB', '#3BA5DB', '#3BA5DB', '#3BA5DB', '#3BA5DB', '#3BA5DB', '#3BA5DB', '#3BA5DB'],
    }
});