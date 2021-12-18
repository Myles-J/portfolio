import Script from 'next/script'
import '../node_modules/aos/dist/aos.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    <Script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.1/js/bootstrap.min.js'/>
    <Script src="https://kit.fontawesome.com/16db9be189.js" crossorigin="anonymous"></Script>
    </>
    )
}

export default MyApp
