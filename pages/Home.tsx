import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Typewriter } from 'react-simple-typewriter';

import lightModeBG from 'public/wickedbackground.svg';
import darkModeBG from 'public/wickedbackground-dark_mode.svg';
import { useTheme } from 'components/ThemeProvider';
import SvgWave from 'components/SvgWave';
import { Arrow } from 'components/Arrow';
import { typewriterWords } from 'helpers/constants';

const Home = ({ containerRef }) => {
	const theme = useTheme();
	const zIndex: any = {
		zIndex: '1',
		textAlign: 'center',
	};

	return (
		<section id='home' ref={containerRef} style={{ zIndex: '0' }}>
			<Head>
				<title>Myles Jefferson</title>
			</Head>
			<Image src={theme === 'Light' ? lightModeBG : darkModeBG} layout='fill' objectFit='cover' objectPosition='center' alt='Background Image' />
			<h1 id='profile-h1' style={zIndex}>
				Hello, I am Myles Jefferson
			</h1>
			<h2 style={zIndex}>
				A <span className='web-text'>&lt;Full-Stack Developer /&gt;</span> experienced with{' '}
				<span >
					<Typewriter words={typewriterWords} cursor cursorStyle='_' />
				</span>
			</h2>
			<a href='https://github.com/Myles-the-Coder' target='_blank' className='btn mt-4' rel='noreferrer' style={zIndex}>
				Explore my code on GitHub
			</a>
			<Arrow />
			<SvgWave />
		</section>
	);
}

export default Home;