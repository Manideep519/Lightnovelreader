import React, { useEffect, useState } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar expand="lg shadow-sm rounded">
        <Container className="container-lg">
          <Navbar.Brand as={Link} to="/">
            <span style={{ fontSize: "24px" }}>LightNovel Reader</span>
          </Navbar.Brand>
          <Button variant="outline-primary" onClick={() => setDarkMode(!darkMode ? true : false)}>
            {darkMode ? <span>&#9788;</span> : <span>&#9790;</span>}
          </Button>
        </Container>
      </Navbar>
      <hr className="m-0" />
    </>
  );
};

export default Header;
