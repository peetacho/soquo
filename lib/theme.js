import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const styles = {
    global: props => ({
        body: {
            bg: mode('white', 'inherit')(props),
            overflow: "overlay",
            color: "primary.400"
        },
        '*': {
            fontFamily: `'Open Sauce One', sans-serif`
        }
    })
}

const colors = {
    primary: {
        400: "#323232",
    },
    brand: {
        400: "#ED8936", // orange.400
        200: "#FBD38D", // orange.200
    },
    bar: {
        400: "#e6ebeb",
    }
}

const fonts = {
    fonts: {
        heading: `'Open Sauce One', sans-serif`,
        body: `'Open Sauce One', sans-serif`,
    }
}

const theme = extendTheme({ config, styles, fonts, colors })

export default theme