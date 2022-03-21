import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import lightModeBG from '../public/wickedbackground.svg';
import darkModeBG from '../public/wickedbackground-dark_mode.svg';
import { useTheme } from '../components/ThemeProvider';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import SvgWave from '../components/SvgWave';
import Arrow from '../components/Arrow'


export default function Home({ containerRef }) {
	const theme = useTheme();
	const zIndex = {
		zIndex: '1',
		textAlign: 'center',
	};
	const { text } = useTypewriter({
		words: [
			'HTML',
			'CSS/SCSS',
			'JavaScript',
			'Bootstrap',
			'React',
			'Redux',
			'React Native',
			'Next.js',
			'Git',
			'API Development',
			'Test-Driven Development',
			'MongoDB',
			'Node',
			'Express',
			'Postman',
			'Heroku/Netlify/Vercel Deployment',
			'AWS',
			'Firebase',
		],
		loop: 0,
	});

	return (
		<section id='home' ref={containerRef} style={{ zIndex: '0' }}>
      <Head>
        <title>Home</title>
      </Head>
			<Image
				priority
				src={theme === 'Light' ? lightModeBG : darkModeBG}
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				alt='Background Image'
			/>
			<h1 id='profile-h1' style={zIndex}>
				Hello, I am Myles Jefferson
			</h1>
			<h2 style={zIndex}>
				A <span className='web-text'>&lt;Full-Stack Developer /&gt;</span>{' '}
				experienced with {text} <Cursor />
			</h2>
			<a
				href='https://github.com/Myles-the-Coder'
				target='_blank'
				className='btn mt-4'
				rel='noreferrer'
				style={zIndex}>
				Explore my code on GitHub
			</a>
			<Arrow />
			<SvgWave />
		</section>
	);
}
