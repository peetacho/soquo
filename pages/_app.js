import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'
import "@fontsource/open-sauce-one"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>SoQuo</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  )
}

export default MyApp
