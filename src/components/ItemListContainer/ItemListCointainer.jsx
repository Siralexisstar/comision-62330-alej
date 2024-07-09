import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { Container, Row, Col, Card } from "react-bootstrap";

const ItemListContainer = ({ title }) => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title className="mb-4" style={{ fontSize: '2rem', color: '#007bff' }}>{title}</Card.Title>
              <ItemList />
              <ItemCount stock={10} initial={1} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemListContainer;

