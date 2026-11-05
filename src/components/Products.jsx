import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function Products() {
  return (
    <Container id="products" className="my-5">
      <h3 className="section-title">Featured Products</h3>
      <Row>
        <Col sm={6} lg={3} className="mb-4">
          <Card className="product-card">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" />
            <Card.Body>
              <Card.Title>Wireless Headphones</Card.Title>
              <Card.Text className="price">$89.99</Card.Text>
              <Button variant="primary" className="w-100">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} lg={3} className="mb-4">
          <Card className="product-card">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" />
            <Card.Body>
              <Card.Title>Smart Watch</Card.Title>
              <Card.Text className="price">$79.99</Card.Text>
              <Button variant="primary" className="w-100">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} lg={3} className="mb-4">
          <Card className="product-card">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" />
            <Card.Body>
              <Card.Title>Backpack</Card.Title>
              <Card.Text className="price">$39.99</Card.Text>
              <Button variant="primary" className="w-100">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} lg={3} className="mb-4">
          <Card className="product-card">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" />
            <Card.Body>
              <Card.Title>Sneakers</Card.Title>
              <Card.Text className="price">$59.99</Card.Text>
              <Button variant="primary" className="w-100">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Products
