import { ChakraProvider } from '@chakra-ui/react'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage/mirage'
import { theme } from '../styles/theme'

if (process.env.NODE_ENV === 'development'){
  makeServer()
}

function MyApp({ Component, pageProps }) {
  return( 
    <ChakraProvider  theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
)}

export default MyApp