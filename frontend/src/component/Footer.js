// import React from 'react'

// const Footer = () => {
//     return (
//         <div>Footer</div>
//     )
// }

// export default Footer
import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const { palette } = useTheme();
    return (
        <>
            <Box sx={{
                height: '70px',
                bgcolor: "#37474f",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box component='span' sx={{ color: "whitesmoke" }}>All rights reserved! 2024.</Box>

            </Box>
        </>
    )
}

export default Footer