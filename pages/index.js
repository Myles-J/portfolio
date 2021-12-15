import Head from 'next/head';
import Image from 'next/image';
import AOS from 'aos'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import { useEffect } from 'react';

export default function Index() {
  useEffect(() => AOS.init(), [])

	return (
		<>
			<Header />
			<Home />
			<Projects />
			<About />
			<Contact />
			<Footer />
		</>
	);
}
