import React  from 'react'
import {useForm, ValidationError} from '@formspree/react'

export default function Contact() {
  const [state, handleSubmit] = useForm('xbjwjqll')
  return (
    <section id="contact" >
    <h1 data-aos="fade-down" data-aos-duration="1000">Say Hello</h1>
    <form
      id="contact-form"
      data-aos="fade-up"
      data-aos-duration="1200"
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="standard-label">Name</label>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter name..."
        required
      />
      <ValidationError prefix='Name' field='name' errors={state.errors}/>
      <br />
      <label htmlFor="email" className="standard-label">Email</label>
      <br />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter email..."
        required
      />
      <ValidationError prefix='Email' field='email' errors={state.errors}/>
      <br />
      <label htmlFor="message" className="standard-label">Message</label>
      <br />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        required
      ></textarea>
      <ValidationError prefix='Message' field='message' errors={state.errors}/>
      <br />
      <button className="btn" type="submit" disabled={state.submitting}>Send Message</button>
    </form>
    {state.succeeded ? <p>Thank you for your message!</p> : ''}
  </section>
  )
}
