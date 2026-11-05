import { Navbar, Nav, Container, Badge } from 'react-bootstrap'

function MyNavbar() {
  return (
    <Navbar className="my-navbar" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="fw-bold">MY STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="store-nav" />
        <Navbar.Collapse id="store-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#">Categories</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              🛒 Cart <Badge bg="danger">0</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
