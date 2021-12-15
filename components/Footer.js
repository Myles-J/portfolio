import React from 'react'

export default function Footer() {
  return (
    <footer id='footer'>
    <p>Find me on</p>
    <div className="social-links">
      <a href="https://github.com/Myles-the-Coder" target="_blank">
        <img
          src={require("../public/Github_Logo.svg")}
          alt="GitHub Logo"
          height="30"
          title="GitHub"
        />
      </a>
      <a href="https://twitter.com/MAaronJ99" target="_blank"
        ><img
          src={require("../public/Twitter_Logo.svg")}
          alt="Twitter Logo"
          height="30"
          title="Twitter"
      /></a>
      <a href="https://www.linkedin.com/in/myles-j-640ba6202/" target="_blank"
        ><img
          src={require("../public/LinkedIn_Logo.svg")}
          alt="LinkedIn Logo"
          height="30"
          title="LinkedIn"
      /></a>
    </div>
    <small
      >Built with
      <div className="heart"></div>
      by Myles Jefferson</small>
  </footer>
  )
}
