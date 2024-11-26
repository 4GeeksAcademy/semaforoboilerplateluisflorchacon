import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
    
function Footer() {
  return (
    <Navbar className="bg-dark text-white" data-bs-theme="dark">
      <Container className="d-flex justify-content-center align-items-center">
        <p className="mb-0 small text-center">
          Copyright © 2024. All rights reserved.
        </p>
      </Container>
    </Navbar>
  );
}

export default Footer;
