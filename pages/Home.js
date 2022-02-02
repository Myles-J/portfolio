import React from 'react';
import Image from 'next/image';
import lightModeBG from '../public/wickedbackground.svg';
import darkModeBG from '../public/wickedbackground-dark_mode.svg';
import { useTheme } from '../components/ThemeProvider';
import {useTypewriter, Cursor} from 'react-simple-typewriter'

export default function Home({ containerRef }) {
	const zIndex = {
		zIndex: '1',
    textAlign: 'center'
	};
  const theme = useTheme()

  const {text} = useTypewriter({
    words: ['HTML', 'CSS/SCSS', 'JavaScript', 'Bootstrap', 'React', 'Redux', 'React Native', 'Next.js', 'Git', 'API Development', 'Test-Driven Development', 'MongoDB', 'Node', 'Express','Postman', 'Heroku/Netlify/Vercel Deployment', 'AWS', 'Firebase' ],
    loop: 0
  })

	return (
		<section id='home' ref={containerRef} style={{ zIndex: '0' }}>
			<Image
        priority
				src={theme === 'Light' ? lightModeBG : darkModeBG}
				layout='fill'
				objectFit='cover'
				objectPosition='center' />
			<h1 id='profile-h1' style={zIndex}>Hello, I am Myles Jefferson</h1>
			<h2 style={zIndex}>
				A <span className='web-text'>&lt;Full-Stack Developer /&gt;</span> experienced with {text} <Cursor/>
			</h2>
			<br />
			<a
				href='https://github.com/Myles-the-Coder'
				target='_blank'
				className='btn'
        rel='noreferrer'
				style={zIndex}>
				Check out some of my code
			</a>
      <div className="arrow"></div>
		</section>
	);
}
