import React from 'react';
import ThemeProvider from 'components/ThemeProvider';
import 'node_modules/aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/globals.scss'
;

const MyApp = ({ Component, pageProps }) => (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);

export default MyApp;
