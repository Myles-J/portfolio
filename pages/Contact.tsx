import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Toast, ToastContainer, Form, FloatingLabel } from 'react-bootstrap';
import { socialLinkSVGs } from 'helpers/constants';

const Contact = () => {
	const [state, handleSubmit] = useForm('xbjwjqll');
	const [show, setShow] = useState(true);

	return (
		<section id='contact'>
			<h1 className='text-center w-75 mt-2' data-aos='fade-down' data-aos-duration='1000'>
				Contact
			</h1>
			<p className='text-center w-75 m-0' data-aos='fade-up' data-aos-duration='1100'>
				I am currently available for hire in Colorado, or remotely. I will respond to your message within 24 business hours.
			</p>
			<p className='text-center w-75 mb-3' data-aos='fade-up' data-aos-duration='1100'>
				You can also find me on
				{socialLinkSVGs.map(({ name, link }) => (
					<a key={name} href={link} target='_blank' rel='noreferrer' className='mx-1 link-primary'>
						{name},
					</a>
				))}
				<a href='https://medium.com/@99mylesjefferson' target='_blank' rel='noreferrer' className='mx-1 link-primary'>
					Medium,
				</a>
				or
				<a href='mailto:99mylesjefferson@gmail.com' className='mx-1 link-primary'>
					email me directly.
				</a>
			</p>
			<Form id='contact-form' data-aos='fade-up' data-aos-duration='1200' onSubmit={handleSubmit}>
				<div className='d-flex justify-content-evenly align-items-center'>
					<FloatingLabel label='Name' className='text-color'>
						<Form.Control className='mb-1' type='text' id='name' name='name' placeholder='x' required />
					</FloatingLabel>
					<ValidationError prefix='Name' field='name' errors={state.errors} />
					<FloatingLabel label='Email' className='text-color'>
						<Form.Control type='email' name='email' id='email' placeholder='x' required />
					</FloatingLabel>
					<ValidationError prefix='Email' field='email' errors={state.errors} />
				</div>
				<label htmlFor='message' className='standard-label my-2'>
					Message
				</label>
				<textarea name='message' id='message' cols={30} rows={30} required />
				<ValidationError prefix='Message' field='message' errors={state.errors} />
				<br />
				<button className='btn' type='submit' disabled={state.submitting}>
					Send Message
				</button>
			</Form>
			{state.succeeded && show ? (
				<ToastContainer className='mt-5 p-1' position='top-center'>
					<Toast bsPrefix='toast' onClose={() => setShow(false)} show={show} delay={3000} autohide>
						<Toast.Body>Thank you for your message!</Toast.Body>
					</Toast>
				</ToastContainer>
			) : null}
		</section>
	);
};

export default Contact;
