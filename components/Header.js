import React from 'react'
import Image from 'next/image'
import whiteLogo from '../public/MJ-Logo-Design-01-White-BG.png'

export default function Header() {
  if (typeof window !== 'undefined') {
    const toggleIcon = document.querySelector('#toggle-icon')
    const toggleSwitch = document.getElementById('toggle-switch')
    toggleSwitch.addEventListener('change', switchTheme)
    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode('dark');
      } else {
        document.documentElement.removeAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode('light');
      }
    }
    
    function toggleDarkLightMode(input) {
      const homeSection = document.getElementById('home')
      const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1)
    
      toggleIcon.children[0].innerText = `${capitalize(input)} Mode`;
      homeSection.style.backgroundImage =
        input === 'dark'
          ? 'url(../public/wickedbackground-dark_mode.svg)'
          : 'url(../public/wickedbackground.svg)';
    }
    
  }


  return (
    <header className="page-header" id="page-header">
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<Image
						className="navbar-brand"
						src={whiteLogo}
            width={60}
            height={60}
						alt="Personal logo"
					/>

					<div className="theme-switch-wrapper">
						<span id="toggle-icon">
							<span className="toggle-text" id="toggle-text">Light Mode</span>
						</span>
						<label className="theme-switch">
							<input type="checkbox" id='toggle-switch'/>
							<div className="slider round"></div>
						</label>
					</div>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<div id="nav-icon">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#home"
									>Home</a
								>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#projects">Projects</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#about">About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contact">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
  )
}
