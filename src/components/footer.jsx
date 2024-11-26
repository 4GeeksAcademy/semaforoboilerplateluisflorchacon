import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
    
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Navbar className="bg-dark text-white" data-bs-theme="dark">
      <Container className="d-flex justify-content-center align-items-center">
        <p className="mb-0 small text-center">
          Copyright © {currentYear}. All rights reserved.
        </p>
      </Container>
    </Navbar>
  );
}

export default Footer;
