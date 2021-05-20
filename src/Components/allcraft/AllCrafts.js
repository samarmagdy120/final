import React, { useEffect, useContext, useState } from "react";
// import axios from "axios";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdb-react-ui-kit";
// import esraa from "../img/team.png";
// import Abdallah from "../img/about/Abdallah.jpeg";
// import Mohamed1 from "../img/about/Mohamed1.jpeg";
// import Walaa from "../img/about/Walaa.jpeg";
// import Esraa2 from "../img/about/Esraa2.jpeg";
import { Jumbotron, Container } from "react-bootstrap";
import "../About/About.css";
import { AuthContext } from "../../context/auth/AuthState";
import { Link } from "react-router-dom";
import StarPicker from "react-star-picker";

const url = "https://services-works.herokuapp.com/api/auth/profile/";

const AllCrafts = ({ match }) => {
  const { clearError, refershSuccess, getUsersViaJobID, users } =
    useContext(AuthContext);

  const id = match.params.id;
  // console.log(id);

  useEffect(() => {
    clearError();
    refershSuccess();
    getUsersViaJobID(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(users);

  return (
    <div style={{ marginTop: "-50px", marginBottom: "-50px" }}>
      <MDBCard className=" my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <Jumbotron fluid>
            <Container>
              <h2>أختار اصنايعى</h2>
              <p>صنايعي خبره هو بوابة اى حرفه</p>
              <hr />
            </Container>
          </Jumbotron>

          <div className="team-card">
            <MDBRow>
              {users.map((item) => {
                return (
                  <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                    {item.image == "image.jpg" ? (
                      <div className="wrapper"></div>
                    ) : (
                      <img
                        src={item.image}
                        width="190px"
                        height="200px"
                        alt=""
                      />
                    )}
                    <h5 className="font-weight-bold mt-4 mb-3">
                      {item.fname}
                      {item.lname}{" "}
                    </h5>
                    <StarPicker value={item.rating} />
                    <Link
                      to={`/profilecraftman/${item._id}`}
                      className="choose"
                      style={{
                        width: "80%",
                        margin: "auto",
                        marginBottom: "30px",
                      }}
                    >
                      تواصل معه
                    </Link>
                  </MDBCol>
                );
              })}
            </MDBRow>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default AllCrafts;
