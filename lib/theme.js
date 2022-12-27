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
            overflow: "overlay"
        },
        '*': {
            fontFamily: 'DM sans'
        }
    })
}

const colors = {
    brand: {
        400: "#193766"
    },
    sub: {
        400: "#697B98"
    },
    primary: {
        400: "#3B82F6"
    }
}

const fonts = {
    fonts: {
        heading: 'DM Sans, sans-serif',
        body: 'DM Sans, sans-serif',
    }
}

const theme = extendTheme({ config, styles, fonts, colors })

export default theme