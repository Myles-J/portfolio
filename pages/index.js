import AOS from 'aos'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import { useEffect, useState, useRef} from 'react';
import { useTheme, useThemeUpdate } from '../components/ThemeProvider';

export default function Index() {
  const theme = useTheme()
  const toggleTheme = useThemeUpdate()
  const [isIntersecting, setIsIntersecting] = useState(false)
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init()
    !localStorage.getItem('theme') && theme
  
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
        toggleTheme(mode.charAt(0).toUpperCase() + mode.slice(1))
        }
  
      return () => containerRef.current && observer.unobserve(containerRef.current); 
  }, [])

  const switchTheme = e => {
    if (theme === 'Light') {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      toggleTheme('Dark')
    } else {
      document.documentElement.removeAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'light');
      toggleTheme('Light')
    }
  }

	return (
		<>
			<Header isIntersecting={isIntersecting} switchTheme={switchTheme}/>
			<Home containerRef={containerRef}/>
			<Projects/>
			<About />
			<Contact />
			<Footer/>
		</>
	);
}
