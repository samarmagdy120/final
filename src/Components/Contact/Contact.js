import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { Jumbotron, Container } from "react-bootstrap";
import HomeImg from "../img/homeimg.gif";
import "../Contact/Contact.css";

class Contact extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#fff" }}>
        <MDBContainer>
          <Jumbotron fluid>
            <Container style={{ backgroundColor: "#fff" }}>
              <h2>صنايعي خبره : تواصل معانا</h2>
              <p>صنايعي خبره هو بوابة اى حرفه</p>
              <hr />
            </Container>
          </Jumbotron>

          <div className="form-contact" style={{ backgroundColor: "#fff" }}>
            <MDBRow>
              <MDBCol md="9" className="md-0 mb-5">
                <form>
                  <MDBRow>
                    <MDBCol md="6">
                      <div className="md-form mb-0">
                        <MDBInput type="text" id="contact-name" label="اسمك" />
                      </div>
                    </MDBCol>
                    <MDBCol md="6">
                      <div className="md-form mb-0">
                        <MDBInput
                          type="text"
                          id="contact-email"
                          label="البريد الالكتروني"
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <div className="md-form mb-0">
                        <MDBInput
                          type="text"
                          id="contact-subject"
                          label="الموضوع"
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <div className="md-form mb-0">
                        <MDBInput
                          type="textarea"
                          id="contact-message"
                          label="رسالتك"
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </form>
                <div className="text-center text-md-left">
                  <MDBBtn color="primary" size="md">
                    إرسال
                  </MDBBtn>
                </div>
              </MDBCol>
              <MDBCol md="3" className="text-center">
                <ul className="list-unstyled mb-0">
                  <li>
                    <MDBIcon
                      icon="map-marker-alt"
                      size="2x"
                      className="blue-text"
                    />
                    <p>البلينا ، سوهاج</p>
                  </li>
                  <li>
                    <MDBIcon
                      icon="phone"
                      size="2x"
                      className="blue-text mt-4"
                    />
                    <p>19812</p>
                  </li>
                  <li>
                    <MDBIcon
                      icon="envelope"
                      size="2x"
                      className="blue-text mt-4"
                    />
                    <p>snai3y5ebra@gmail.com</p>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </div>

          <Jumbotron fluid>
            <Container>
              <h3>
                تابع الآخبار
                <img
                  src="http://www.san3ah.com/assets/Images/cout.png"
                  alt=""
                />
              </h3>
              <p>
                تابع اخر الأخبـار واستمتع بالعروض والبرومو كود على وسائل التواصل
                الإجتمــاعى
              </p>
              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="#"
              >
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#55acee" }}
                href="#"
              >
                <MDBIcon fab icon="twitter" />
              </MDBBtn>
              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#25d366" }}
                href="#"
              >
                <MDBIcon fab icon="whatsapp" />
              </MDBBtn>
              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="#"
              >
                <MDBIcon fab icon="instagram" />
              </MDBBtn>
              <hr />
              <img
                className="homeimg"
                src={HomeImg}
                width="300"
                height="300"
                alt=""
              />
            </Container>
          </Jumbotron>
        </MDBContainer>
      </div>
    );
  }
}

export default Contact;
