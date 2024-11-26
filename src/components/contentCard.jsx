import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Boton from "./botonsito";

function Cartas() {
  return (
    <Row xs={1} md={2} className="">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
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
