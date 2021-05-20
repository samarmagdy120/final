import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import esraa from "../img/team.png";
import Abdallah from "../img/about/Abdallah.jpeg";
import Mohamed1 from "../img/about/Mohamed1.jpeg";
import Walaa from "../img/about/Walaa.jpeg";
import Esraa2 from "../img/about/Esraa2.jpeg";
import { Jumbotron, Container } from "react-bootstrap";
import "../About/About.css";
class About extends Component {
  render() {
    return (
      <MDBCard className=" my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <Jumbotron fluid>
            <Container>
              <h2>صنايعي خبره : نبذه عنا</h2>
              <p>صنايعي خبره هو بوابة اى حرفه</p>
              <hr />
            </Container>
          </Jumbotron>

          <div className="team-card">
            <MDBRow>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <img src={Mohamed1} width="190px" height="200px" alt="" />
                <h5 className="font-weight-bold mt-4 mb-3">
                  محمد احمد عبد الرحيم
                </h5>
                <p className="text-uppercase blue-text">مطور مواقع ويب</p>
                <p className="grey-text">
                  يدرس نظم المعلومات الاداريه بمعهد الجيزه العالي للعلوم
                  الاداريه
                </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="twitter" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="instagram" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <img src={Esraa2} width="190px" height="200px" alt="" />
                <h5 className="font-weight-bold mt-4 mb-3">اسراء هريدي سيد</h5>
                <p className="text-uppercase blue-text">مطورة مواقع ويب</p>
                <p className="grey-text">
                  يدرس نظم المعلومات الاداريه بمعهد الجيزه العالي للعلوم
                  الاداريه
                </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="instagram" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <img src={Abdallah} width="190px" height="200px" alt="" />
                <h5 className="font-weight-bold mt-4 mb-3">
                  عبد الله سيد احمد
                </h5>
                <p className="text-uppercase blue-text">مطور مواقع ويب</p>
                <p className="grey-text">
                  يدرس نظم المعلومات الاداريه بمعهد الجيزه العالي للعلوم
                  الاداريه
                </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="instagram" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="dribbble" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <img src={Walaa} width="190px" height="200px" alt="" />
                <h5 className="font-weight-bold mt-4 mb-3">ولاء </h5>
                <p className="text-uppercase blue-text">مصممة</p>
                <p className="grey-text">
                  يدرس نظم المعلومات الاداريه بمعهد الجيزه العالي للعلوم
                  الاداريه
                </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="github" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <img src={esraa} width="190px" height="200px" alt="" />
                <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
                <p className="text-uppercase blue-text">Photographer</p>
                <p className="grey-text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim est fugiat nulla id eu
                  laborum.
                </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="instagram" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="dribbble" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <img src={esraa} width="190px" height="200px" alt="" />
                <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
                <p className="text-uppercase blue-text">Photographer</p>
                <p className="grey-text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim est fugiat nulla id eu
                  laborum.
                </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="instagram" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="dribbble" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <img src={esraa} width="190px" height="200px" alt="" />
                <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
                <p className="text-uppercase blue-text">Photographer</p>
                <p className="grey-text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim est fugiat nulla id eu
                  laborum.
                </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="instagram" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="dribbble" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <img src={esraa} width="190px" height="200px" alt="" />
                <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
                <p className="text-uppercase blue-text">Photographer</p>
                <p className="grey-text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim est fugiat nulla id eu
                  laborum.
                </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="instagram" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="dribbble" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <img src={esraa} width="190px" height="200px" alt="" />
                <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
                <p className="text-uppercase blue-text">Photographer</p>
                <p className="grey-text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim est fugiat nulla id eu
                  laborum.
                </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="instagram" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="dribbble" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <img src={esraa} width="190px" height="200px" alt="" />
                <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
                <p className="text-uppercase blue-text">Photographer</p>
                <p className="grey-text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim est fugiat nulla id eu
                  laborum.
                </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="instagram" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="dribbble" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
export default About;
