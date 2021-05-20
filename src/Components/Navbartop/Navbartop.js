import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";

import "../Navbartop/Navbartop.css";

const Navbartop = () => {
  return (
    <div className="nav-top">
      <Container>
        <Row>
          <Col className="nav-icon" lg={12} md={12} sm={12}>
            <Col lg={6} md={6} sm={6}>
              <div className="gem-contacts-item gem-contacts-phone">
                <a _ngcontent-c2="" class="no-link" href="tel:19812">
                  <i className="fa fa-phone" aria-hidden="true"></i> 19812
                </a>
              </div>
            </Col>

            <div className="top-area-block top-area-socials socials-colored-hover">
              <div className="socials inline-inside">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="dribbble" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbartop;
