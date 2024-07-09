// Sidebar.jsx
import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav>
            <ul className="list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#link">Link</a></li>
              <li><a href="#action">Action</a></li>
              <li><a href="#another-action">Another action</a></li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
