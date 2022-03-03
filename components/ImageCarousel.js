import React from 'react'
import { Carousel } from 'react-bootstrap'
import Image from 'next/image'

export default function ImageCarousel({img1, img2, img3, id}) {
  const {Item} = Carousel
  return (
//   <div id={id} style={{width: '100%'}} className="carousel slide bg-black m-auto" data-bs-ride="carousel">
//   <div className="carousel-indicators">
//     <button type="button" data-bs-target={`#${id}`} data-bs-slide-to="0" className="active bg-primary" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target={`#${id}`}  data-bs-slide-to="1" className='bg-primary' aria-label="Slide 2"></button>
//     <button type="button" data-bs-target={`#${id}`}  data-bs-slide-to="2" className='bg-primary' aria-label="Slide 3"></button>
//   </div>
//   <div className="carousel-inner">
//     <div className="carousel-item active text-center">
//       <Image src={img1} width={900} height={450} className='m-auto' alt='image1'/>
//     </div>
//     <div className="carousel-item text-center">
//       <Image src={img2} width={900} height={450} className='m-auto' alt='image2'/>
//     </div>
//     <div className="carousel-item text-center">
      // <Image src={img3} width={900} height={450} className='m-auto' alt='image3'/>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`}  data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target={`#${id}`}  data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
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
