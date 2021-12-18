import React from 'react'
import Image from 'next/image'
import lightModeBG from '../public/wickedbackground.svg'
import darkModeBG from '../public/wickedbackground-dark_mode.svg'

export default function Home({containerRef, theme}) {
 const zIndex = {
   zIndex: '1'
 }
  return (
    <section id="home" ref={containerRef} style={{zIndex: '0'}}>
    <Image src={theme === 'Light' ? lightModeBG : darkModeBG} layout='fill' objectFit='cover' objectPosition='center'></Image>
    <h1 id="profile-h1" style={zIndex}></h1>
    <h2 style={zIndex}>
      I am a <span className="web-text">&lt;web&gt;</span> developer from Colorado
    </h2>
    <br />
    <a href="https://github.com/Myles-the-Coder" target="_blank" className="btn" style={zIndex}
      >Check out some of my code</a
    >
  </section>
  )
}
