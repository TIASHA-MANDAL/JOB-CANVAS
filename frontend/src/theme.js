import { createTheme } from '@mui/material/styles';
import { blue, blueGrey, green, lightBlue } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[800]
        },
        secondary: {
            main: lightBlue[800],
            midNightBlue: "#003366",
            myBlue: blue[900]
        }
    }
});