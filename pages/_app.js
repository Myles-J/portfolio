import Script from 'next/script'
import ThemeProvider from '../components/ThemeProvider'
import '../node_modules/aos/dist/aos.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
    <Component {...pageProps} />
    <Script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.1/js/bootstrap.min.js'/>
    </ThemeProvider>
    )
}

export default MyApp
