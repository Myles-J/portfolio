import React from 'react'

export default function Home({containerRef}) {
  return (
    <section id="home" ref={containerRef}>
    <h1 id="profile-h1"></h1>
    <h2>
      I am a <span className="web-text">&lt;web&gt;</span> developer from Colorado
    </h2>
    <br />
    <a href="https://github.com/Myles-the-Coder" target="_blank" className="btn"
      >Check out some of my code</a
    >
  </section>
  )
}
