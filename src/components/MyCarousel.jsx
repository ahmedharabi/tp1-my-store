import { Carousel, Button } from 'react-bootstrap'

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 slide-img" src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1400" alt="slide 1" />
        <Carousel.Caption className="slide-caption">
          <h2>Best Deals For Your Style</h2>
          <p>Discover amazing products at the best prices.</p>
          <Button variant="primary">Shop Now →</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 slide-img" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400" alt="slide 2" />
        <Carousel.Caption className="slide-caption">
          <h2>Summer Collection</h2>
          <p>Fresh style for a better you.</p>
          <Button variant="light">Shop Now →</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 slide-img" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400" alt="slide 3" />
        <Carousel.Caption className="slide-caption">
          <h2>New Arrivals</h2>
          <p>Check out the latest products in our store.</p>
          <Button variant="primary">Shop Now →</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default MyCarousel
