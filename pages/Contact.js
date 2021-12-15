import React from 'react'

export default function Contact() {
  return (
    <section id="contact">
    <h1 data-aos="fade-down" data-aos-duration="1000">Say Hello</h1>
    <form
      id="contact-form"
      data-aos="fade-up"
      data-aos-duration="1200"
      action="https://formspree.io/f/mleakqgy"
      method="post"
    >
      <label for="name" className="standard-label">Name</label>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter name..."
        required
      />
      <br />
      <label for="email" className="standard-label">Email</label>
      <br />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter email..."
        required
      />
      <br />
      <label for="message" className="standard-label">Message</label>
      <br />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        required
      ></textarea>
      <br />
      <button className="btn" type="submit">Send Message</button>
    </form>
    <p id="my-form-status"></p>
  </section>
  )
}
