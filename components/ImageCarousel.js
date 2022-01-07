import React from 'react'
import Image from 'next/image'

export default function ImageCarousel({img1, img2, img3, id}) {
  return (
  <div id={id} style={{width: '95%'}} class="carousel slide bg-black m-auto" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target={`#${id}`} data-bs-slide-to="0" class="active bg-primary" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target={`#${id}`}  data-bs-slide-to="1" class='bg-primary' aria-label="Slide 2"></button>
    <button type="button" data-bs-target={`#${id}`}  data-bs-slide-to="2" class='bg-primary' aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active text-center">
      <Image src={img1} width={900} height={450} class='m-auto'/>
    </div>
    <div class="carousel-item text-center">
      <Image src={img2} width={900} height={450} class='m-auto'/>
    </div>
    <div class="carousel-item text-center">
      <Image src={img3} width={900} height={450} class='m-auto'/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target={`#${id}`}  data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target={`#${id}`}  data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}
