import React from 'react';
import Image from 'next/image';
import profilePicture from 'public/profile-pic.png';
import SvgWave from 'components/SvgWave';

const About = () => {
	return (
		<section id='about'>
			<h1 className='title mt-3' data-aos='fade-in' data-aos-duration='1000'>
				About
			</h1>
			<Image
				className='profile-img'
				src={profilePicture}
				width={175}
				height={175}
				alt='Profile Picture'
				data-aos='fade-up'
				data-aos-duration='1100'
			/>
			<div className='about-desc'>
				<p data-aos='fade-left' data-aos-duration='1100'>
					Hello, my name is Myles Jefferson. I am a Full-Stack Developer with a
					background in analyzing problems to find and implement desirable
					solutions, thanks in part to a work history of physical labor. While
					seeming quite different from web development, this type of work
					instilled in me the value of hard work and the necessity of
					identifying and solving problems. My transition into web development
					stems from an ever-present interest in technology paired with my drive
					to do the work that most would not. My goal is to bring a strong work
					ethic and valuable web development skills to a full-time role that
					allows me to develop quality products and solve technical problems. 
				</p>
				<p data-aos='fade-right' data-aos-duration='1200'>
					I consider myself to be &quot;forever student&quot;, one who is always
					eager to build upon my existing experience and stay in tune with the
					ever-changing world of software development. Ultimately, I want to
					bring my skills to an energetic, passionate, and forward-thinking
					company that aims to deliver quality products. I am currently available for hire in Colorado and remotely.
				</p>
			</div>
			<a href='https://docdro.id/cTkg7TC' target='_blank' rel='noreferrer' className='btn mb-3'>
				View/Download my Résumé
			</a>
      <SvgWave/>
		</section>
	);
}

export default About
