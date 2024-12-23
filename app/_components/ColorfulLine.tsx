import React from 'react';
import { Box } from '@mantine/core';

const ColorfulLine = () => {
    return (
        <Box
            style={{
                width: '100%',
                height: '6px',
                backgroundImage: 'linear-gradient(to right, #FF5733 0%, #FF5733 20%, #C70039 20%, #C70039 40%, #900C3F 40%, #900C3F 60%, #581845 60%, #581845 80%, #DAF7A6 80%, #DAF7A6 100%)'
            }}
        />
    );
};

export default ColorfulLine;