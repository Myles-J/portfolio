import ThemeProvider from 'components/ThemeProvider';
import '../node_modules/aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
