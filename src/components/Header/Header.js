import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar expand="lg shadow-sm rounded">
        <Container className="container-lg">
          <Navbar.Brand as={Link} to="/">
            <span style={{ fontSize: "24px" }}>LightNovel Reader</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <hr className="m-0" />
    </>
  );
};

export default Header;
