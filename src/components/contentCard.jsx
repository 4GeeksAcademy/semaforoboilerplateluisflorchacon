import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Boton from "./botonsito";

function Cartas() {
  return (
    <Row className="d-flex flex-row justify-content-around">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx} xs={12} md={6} lg={3}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/29512123/pexels-photo-29512123/free-photo-of-villa-tropical-frente-al-mar-en-sri-lanka.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt={`Card ${idx + 1}`}
              style={{objectFit: "cover"}}
            />
            <Card.Body>
              <Card.Title>Card {idx + 1}</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
                temporibus possimus laborum nobis qui rem nam saepe facilis
                perspiciatis libero unde aliquam incidunt sed minus at,
                repudiandae repellat dolore odio.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Boton />
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Cartas;

