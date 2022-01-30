import React from 'react';
import { socialLinkSVGs } from '../helpers/constants';
import { useTheme } from './ThemeProvider';

export default function Footer() {
  const theme = useTheme()
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
		</footer>
	);
}
