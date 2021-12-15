import React from 'react'

export default function About() {
  return (
    <section id="about">
    <div className="about-desc">
      <h1 className="title">About</h1>
      {/* <img
        className="profile-img"
        src="./img/p2rofile-pic.png"
        alt="Profile Picture"
        data-aos="fade-right"
        data-aos-duration="1000"
      />  */}
      <p data-aos="fade-left" data-aos-duration="1100">
        I am a web developer with a proclivity for Front-End Development. I
        have experience working with HTML, CSS, Bootstrap, JavaScript, and
        React.js. Additionally, I have a solid understanding Git version
        control, Node.js, and implementing API calls. While most of my
        experience resides on the front end, I plan to expand my skill set
        with more Back-End focused frameworks and applications like
        Express.js, MongoDB, and PostgresSQL.
      </p>
      <p data-aos="fade-left" data-aos-duration="1200">
        I consider myself to be a 'forever student', one who is always eager
        to build upon my existing experience and stay in tune with the
        ever-changing world of web development. Ultimately, I want to bring my
        skills to an energetic, passionate, and forward-thinking company where
        I can grow into a Full Stack Developer.
      </p>
    </div>
    <a href="#" className="btn">Download My CV</a>
  </section>
  )
}
