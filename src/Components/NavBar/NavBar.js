import React, { useContext, useEffect } from "react";
import "../NavBar/NavBar.css";
import logo from "../img/logo.png";
import { Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthState";
function NavBar() {
  const { logout } = useContext(AuthContext);

  const logoutHandler = () => {
    logout();
  };
  return (
    <Navbar className="bg-color" expand="lg">
      <Container>
        <Row className="NavRow">
          <Col className="padding-0" lg={6} md={6} sm={6}>
            <Navbar.Brand>
              <Link to="/">
                <span>
                  صنايعي خبره
                  <img src={logo} width="80px" alt="" />
                </span>
              </Link>
            </Navbar.Brand>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/">الرئيسية</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/services">الخدمات</Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to="/About">نبذه عنا</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Contact">تواصل معانا</Link>
                </Nav.Link>
                {localStorage.token ? (
                  <NavDropdown title="اكونت" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <Link to="/profile">بروفايل</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      <Link to="#" onClick={logoutHandler}>
                        تسجيل الخروج{" "}
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <NavDropdown title="سجل الان" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <Link to="/Signup_Craftsman">صنايعي</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      <Link to="/Signup_customer">عميل</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      <Link to="/login">دخول</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;
