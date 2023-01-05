import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'
import "@fontsource/open-sauce-one"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
