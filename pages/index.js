import Head from 'next/head';
import AOS from 'aos'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import { useEffect, useState, useRef } from 'react';

export default function Index() {
  const [theme, setTheme] = useState('')
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init()
  
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          entry.isIntersecting
            ? setIsIntersecting(true)
            : setIsIntersecting(false)
        });
      }, {root: null,
          threshold: 0,
          rootMargin: '0px',});
  
      observer.observe(containerRef.current);

      const mode = localStorage.getItem('theme');
      if (mode) {
        document.documentElement.setAttribute('data-theme', mode);
        setTheme(mode.charAt(0).toUpperCase() + mode.slice(1));
      }

      window.addEventListener('click', () => {
        const navbarSupportedContent = document.querySelector(
          '#navbarSupportedContent'
        );

        if (!navbarSupportedContent.classList.contains('show')) return;

        let collapseElementList = [].slice.call(
          document.querySelectorAll('.collapse')
        );
        collapseElementList.map(
          collapseEl => new bootstrap.Collapse(collapseEl)
        );

       setIsOpen(false)
      })
  
      return () => {
        containerRef.current && observer.unobserve(containerRef.current);
      }; 
  }, [])

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setTheme('Dark')
    } else {
      document.documentElement.removeAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'light');
      setTheme('Light')
    }
  }

  function toggleIsOpen() {
    setIsOpen(prevOpen => !prevOpen)
  }

	return (
		<>
			<Header isIntersecting={isIntersecting} switchTheme={switchTheme} theme={theme} isOpen={isOpen} toggleIsOpen={toggleIsOpen}/>
			<Home theme={theme} containerRef={containerRef}/>
			<Projects />
			<About />
			<Contact />
			<Footer theme={theme}/>
		</>
	);
}
