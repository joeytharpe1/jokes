import React from 'react'
import Header from './Header';
import Jokes from './Jokes'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#097969', //green
            light: '#fff' //white
        },
        secondary: {
            main: '#ADB3BC' //grey
        },
        warning: {
            main: '#fff'
        }
    },
    typography: {
        fontFamily: 'Garamond'
    }
})


function Main() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Jokes />
        </ThemeProvider>
    )
}

export default Main;
