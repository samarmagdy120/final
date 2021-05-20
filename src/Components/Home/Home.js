import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Carousel } from "react-bootstrap";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import logo from "../img/logo.png";
import delivery from "../img/delivery.png";
import callCenter from "../img/call center.jpg";
import Tech from "../img/tech.jpg";
import Faster from "../img/faster.png";
import Security from "../img/security.jpg";
import Worker from "../img/worker.png";
import Craftsman from "../img/craftsman.png";
import Location from "../img/location.png";
import Money from "../img/money.jpg";
import SavedMoney from "../img/saved money.png";
import Using from "../img/using.png";
import Using2 from "../img/using2.png";
import HomeImg from "../img/homeimg.gif";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="scroll_top"></div>
        <div className="main">
          <div className="container d-flex h-100 flex-column justify-content-center align-items-center">
            <h1> اختــار حـرفتـكـ أو شطـب شقتـكـ</h1>
            <img src={logo} width="190px" height="200px" alt="" />
            <Link to="services">الخدمات</Link>
          </div>
          <div className="wave"></div>
        </div>

        <Jumbotron fluid style={{ backgroundColor: "#fff" }}>
          <Container>
            <h2>صنايعي خبره : انضم الينا الان كعميل</h2>
            <p>
              صنايعي خبره هو بوابة اى حرفه , وعشان نضمن اننا نكون حلقة وصل فعالة
              اعتمدنا على تحقيق الفرص للصنايعي والعميل
            </p>
            <hr />
          </Container>
        </Jumbotron>

        <section
          className="aboutSec"
          style={{ backgroundColor: "#fff", marginTop: "-33px" }}
        >
          <Container>
            <Row>
              <Col fluid className="l-aboutSec">
                <img src={delivery} width="400px" alt="" />
              </Col>

              <Col>
                <Row>
                  <Col md={6}>
                    <img
                      className="png_aboutSec"
                      src={Tech}
                      width="50px"
                      alt=""
                    />
                    <div>
                      <h5 className="color-h5">! هنوفرلك أي صنعه </h5>
                      <p>
                        عندنا مجموعة متكاملة من افضل واقوي الصنايعية فى مصر اللي
                        هيساعدوك تنجز اعمالك كلها فى اسرع وقتا مهما كانت .
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <img
                      className="png_aboutSec"
                      src={Faster}
                      width="50px"
                      alt=""
                    />
                    <div>
                      <h5 className="color-h5">سرعة فى التنفيذ</h5>
                      <p>
                        سيارتك عطلت على الطريق ومش عارف تتصرف ! , الحل مع صنعة
                        لانها بتوفرلك اى صنعة فى اسرع وقت وباعلي كفاءة وجودة
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <img
                      className="png_aboutSec"
                      src={Security}
                      width="50px"
                      alt=""
                    />
                    <div>
                      <h5 className="color-h5">! آمان ليك ولبيتك</h5>
                      <p>
                        لاننا يهمنا سلامتك وسلامة بيتك بنوفرلك دعم فني على مدار
                        الساعة وطول ايام الاسبوع عشان نتابع معاك طلبك ونساعدك ,
                        بالإضافة لوسائل الامان اللى بنضمنهالك وبنقدمهالك على
                        بروفايل كل صنايعي .
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <img
                      className="png_aboutSec"
                      src={callCenter}
                      width="50px"
                      alt=""
                    />
                    <div>
                      <h5 className="color-h5">خـدمة عمـلاء 24 سـاعة</h5>
                      <p>
                        الدعم الفني معاك طول ايام الاسبوع وعلى مدار اليوم عشان
                        نتحقق ان الخدمة بتم بشكل كويس , كمان بنقدملك خدمة الطلب
                        السريع اللى من خلالها تقدر تطلبنا فى اى مكان وفى اى وقت
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="aboutSec2" style={{ backgroundColor: "#fff" }}>
          <Container>
            <Row>
              <Col>
                <section className="aboutSec-top">
                  <h3>
                    خدمات الصنايعية بين ايديك
                    <img
                      src="http://www.san3ah.com/assets/Images/cout.png"
                      alt=""
                    />
                  </h3>
                  <h6>مع تطبيق صنعة هتقدر تطلب جميع الخدمات من موبايلك</h6>
                </section>
                <hr />
                <Carousel>
                  <Carousel.Item>
                    <div className="back-carousel"></div>
                    <Carousel.Caption>
                      <h4>
                        جميع الخدمات اللى هتحتاجها لبيتك او شركتك من نجارة او
                        مقاولة وحدادة وغيرها من خدمات فنية كتير صنايعي خبره
                        بيوفرهالك
                      </h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="back-carousel"></div>

                    <Carousel.Caption>
                      <h4>
                        لاننا بنقدر وقتك فى صنايعي خبره , التطبيق مدروس بالكامل
                        إنه يحقق لك السهولة والسرعة فى تنفيذ طلبك , عشان نقدر
                        نساعدك ونوصلك فى اسرع وقت
                      </h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="back-carousel"></div>

                    <Carousel.Caption>
                      <h4>
                        الدعم الفني معاك طول ايام الاسبوع وعلى مدار اليوم عشان
                        نتحقق ان الخدمة تتم بشكل مميز , كمان بنقدملك خدمة الطلب
                        السريع اللى من خلالها تقدر تطلبنا فى اى مكان وفى اى وقت
                      </h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>

              <Col fluid className="r-aboutSec">
                <img src={Worker} width="440px" alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <Jumbotron
          fluid
          style={{ backgroundColor: "#fff", marginTop: "-33px" }}
        >
          <Container>
            <h3>
              صنايعي خبره : انضم الينا الان كصنايعي
              <img src="http://www.san3ah.com/assets/Images/cout.png" alt="" />
            </h3>
            <p>
              صنايعي خبره هو بوابة اى حرفه , وعشان نضمن اننا نكون حلقة وصل فعالة
              اعتمدنا على تحقيق الفرص للصنايعي والعميل
            </p>
            <hr />
          </Container>
        </Jumbotron>

        <section
          className="aboutSec"
          style={{ backgroundColor: "#fff", marginTop: "-33px" }}
        >
          <Container>
            <Row>
              <Col fluid className="l-aboutSec">
                <img src={Craftsman} width="400px" alt="" />
              </Col>

              <Col>
                <Row>
                  <Col md={6}>
                    <img
                      className="png_aboutSec"
                      src={SavedMoney}
                      width="50px"
                      alt=""
                    />
                    <div>
                      <h5 className="color-h5">هتعتمد عليه وهتزود دخلك</h5>
                      <p>
                        هتقدر تسجل معانا وتستقبل الطلبات على الصنعة بتاعتك مجرد
                        ما حسابك يتفعل معانا فى صنعة بكل سهولة !
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <img
                      className="png_aboutSec"
                      src={Money}
                      width="50px"
                      alt=""
                    />
                    <div>
                      <h5 className="color-h5">باب رزق لصنعتك </h5>
                      <p>
                        لاننا بنكبر بيكم مهما كانت صنعتك هتقدر تسجل معانا وتفتح
                        باب رزق ليك بيوفرلك الطلب على صنعتك
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <img
                      className="png_aboutSec"
                      src={callCenter}
                      width="50px"
                      alt=""
                    />
                    <div>
                      <h5 className="color-h5">خـدمة عمـلاء 24 سـاعة</h5>
                      <p>
                        الدعم الفني معاك طول ايام الاسبوع وعلى مدار اليوم عشان
                        نتحقق ان الخدمة بتم بشكل كويس , كمان بنقدملك خدمة الطلب
                        السريع اللى من خلالها تقدر تطلبنا فى اى مكان وفى اى وقت
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <img
                      className="png_aboutSec"
                      src={Location}
                      width="60px"
                      alt=""
                    />
                    <div>
                      <h5 className="color-h5">شغلك جنب بيتك</h5>
                      <p>
                        زى ما بنهتم نقدم الخدمة بـ أفضل شكل كمان يهمنا راحتك
                        عشان كده بنوفرلك اقرب الطلبات لمكانك او منطقتك
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="aboutSec2" style={{ backgroundColor: "#fff" }}>
          <Container>
            <Row>
              <Col>
                <section className="aboutSec-top">
                  <h3>
                    طريقة الاستخدام للعميل
                    <img
                      src="http://www.san3ah.com/assets/Images/cout.png"
                      alt=""
                    />
                  </h3>
                  <h6>
                    يعتبر تطبيق صنايعي خبره من اسهل التطبيقات فى اللإستخدام ,
                    خطوات بسيطة واجهة مميزة{" "}
                  </h6>
                </section>
                <hr />
                <Carousel>
                  <Carousel.Item>
                    <div className="back-carousel"></div>
                    <Carousel.Caption>
                      <h4>...............................................</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="back-carousel"></div>

                    <Carousel.Caption>
                      <h4>...............................................</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="back-carousel"></div>

                    <Carousel.Caption>
                      <h4>................................................</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>

              <Col fluid className="r-aboutSec">
                <img src={Using} width="400px" alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <section
          className="aboutSec2"
          style={{ backgroundColor: "#fff", marginTop: "-33px" }}
        >
          <Container>
            <Row>
              <Col fluid className="r-aboutSec2">
                <img src={Using2} width="400px" alt="" />
              </Col>
              <Col>
                <section className="aboutSec-top">
                  <h3>
                    طريقة الاستخدام للصنايعي
                    <img
                      src="http://www.san3ah.com/assets/Images/cout.png"
                      alt=""
                    />
                  </h3>
                  <h6>
                    يعتبر تطبيق صنايعي خبره من اسهل التطبيقات فى اللإستخدام ,
                    خطوات بسيطة واجهة مميزة{" "}
                  </h6>
                </section>
                <hr />
                <Carousel>
                  <Carousel.Item>
                    <div className="back-carousel"></div>
                    <Carousel.Caption>
                      <h4>...............................................</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="back-carousel"></div>

                    <Carousel.Caption>
                      <h4>...............................................</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="back-carousel"></div>

                    <Carousel.Caption>
                      <h4>................................................</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </section>

        <Jumbotron
          fluid
          style={{ backgroundColor: "#fff", marginBottom: "0px" }}
        >
          <Container>
            <h3>
              تابع الآخبار
              <img src="http://www.san3ah.com/assets/Images/cout.png" alt="" />
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
      </React.Fragment>
    );
  }
}

export default Home;
