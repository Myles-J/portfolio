import Head from 'next/head';
import AOS from 'aos'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import { useEffect } from 'react';
import useElementOnScreen from '../components/useElementOnScreen';

export default function Index() {
  useEffect(() => AOS.init(), [])
  const [containerRef] = useElementOnScreen({
    root: null,
    rootMargin: '-5px',
    threshold: 0
  })
	return (
		<>
			<Header />
			<Home containerRef={containerRef}/>
			<Projects />
			<About />
			<Contact />
			<Footer />
		</>
	);
}
