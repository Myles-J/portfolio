import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer id='footer'>
    <p>Find me on</p>
    <div className="social-links">
      <a href="https://github.com/Myles-the-Coder" target="_blank">
        <Image
          src={require("../public/Github_Logo.svg")}
          alt="GitHub Logo"
          width={60}
          height={40}
          title="GitHub"
          className='GitHub-logo'
        />
      </a>
      <a href="https://twitter.com/MAaronJ99" target="_blank"
        ><Image
          src={require("../public/Twitter_Logo.svg")}
          alt="Twitter Logo"
          width={60}
          height={40}
          title="Twitter"
          className='Twitter-logo'
      /></a>
      <a href="https://www.linkedin.com/in/myles-j-640ba6202/" target="_blank"
        ><Image
          src={require("../public/LinkedIn_Logo.svg")}
          alt="LinkedIn Logo"
          width={60}
          height={40}
          title="LinkedIn"
          className='LinkedIn-logo'
      /></a>
    </div>
    <small
      >Built with
      <div className="heart"></div>
      by Myles Jefferson 2021</small>
  </footer>
  )
}
