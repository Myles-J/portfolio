import React from 'react'

export default function Header() {
  return (
    <header className="page-header" id="page-header">
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<img
						className="navbar-brand"
						src={require("../public/MJ-Logo-Design-01-White-BG.png")}
						alt="Personal logo"
					/>

					<div className="theme-switch-wrapper">
						<span id="toggle-icon">
							<span className="toggle-text" id="toggle-text">Light Mode</span>
						</span>
						<label className="theme-switch">
							<input type="checkbox" />
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
