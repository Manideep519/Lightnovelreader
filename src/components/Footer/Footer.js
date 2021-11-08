import React from "react";
import { Container } from "react-bootstrap";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <hr className="m-0" />
      <footer className={`${styles.footer}`}>
        <Container>
          <div>
            <h4>Light Novel Reader&copy; 2021</h4>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
