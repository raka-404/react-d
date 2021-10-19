import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel fade>
  <Carousel.Item>
    <img
    style={{height:'85vh'}}
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:'85vh'}}
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:'85vh'}}
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/evening-view-of-skyscraper-in-dhaka-picture-id1181657227?k=20&m=1181657227&s=612x612&w=0&h=BltIuog0Bjt-BrXdxxcnBIAe11uXAS0u8LJzYh3ipzk="
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;