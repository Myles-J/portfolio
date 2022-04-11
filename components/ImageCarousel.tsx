import React from 'react'
import Image from 'next/image'
import { Carousel } from 'react-bootstrap'

export default function ImageCarousel({img1, img2, img3}) {
  const {Item} = Carousel
  return (
<Carousel bsPrefix='carousel'>
  <Item>
  <Image priority src={img1} width={900} height={450} alt='image1'/>
  </Item>
  <Item>
<Image priority src={img2} width={900} height={450}  alt='image2'/>
  </Item>
  <Item>
  <Image priority src={img3} width={900} height={450} alt='image3'/>
  </Item>
</Carousel>
  )
}
