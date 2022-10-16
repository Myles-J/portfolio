import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = ({ img1, img2, img3 }) => {
	const { Item } = Carousel;
	const images = [
		{
			src: img1,
			alt: 'image 1',
		},
		{
			src: img2,
			alt: 'image 2',
		},
		{
			src: img3,
			alt: 'image 3',
		},
	];

	return (
		<Carousel bsPrefix='carousel'>
			{images.map(({ src, alt }, index) => (
				<Item key={index}>
					<Image priority src={src} width={900} height={450} alt={alt} />
				</Item>
			))}
		</Carousel>
	);
}

export default ImageCarousel;
