import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Slider() {
    
  return (
    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="/Content/Banner/images.jpg"
      alt="First slide"
   height={300}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="/Content/Banner/images.jpg"
      alt="Second slide"
      height={300}
     
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="/Content/Banner/images.jpg"
      alt="Third slide"
      height={300}
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}
