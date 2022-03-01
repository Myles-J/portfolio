import React from 'react';
import { socialLinkSVGs } from '../helpers/constants';
import { useTheme } from './ThemeProvider';

export default function Footer() {
	const theme = useTheme();
	return (
		<footer id='footer'>
			<h5 className='footer-h4'>Find me on</h5>
			<div className='social-links'>
				{socialLinkSVGs.map(svg => {
					const { name, link, xmlns, width, height, viewBox, x, y, d } = svg;
					return (
						<a href={link} target='_blank' key={name} rel='noreferrer'>
							<svg
								className={`${name}-logo`}
								xmlns={xmlns}
								x={x}
								y={y}
								width={width}
								height={height}
								viewBox={viewBox}
								style={{ fill: theme === 'Light' ? '#000' : '#fff' }}>
								{' '}
								<path d={d}></path>
							</svg>
						</a>
					);
				})}
			</div>
			<small>
				Built with
				<div className='heart'></div>
				by Myles Jefferson 2021
			</small>

			<div className="split">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <rect x="1200" height="3.6"></rect>
        <rect height="3.6"></rect>
        <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z" className="shape-fill"></path>
    </svg>
</div>
		</footer>
	);
}
