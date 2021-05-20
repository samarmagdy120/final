import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Jumbotron,
  Container,
  Button,
  Modal,
  InputGroup,
  FormControl,
  NavLink,
} from "react-bootstrap";
import "./Services.css";
import { Link } from "react-router-dom";
import Loader from '../Loader';

const url = "https://services-works.herokuapp.com/api/jobs";

const Services = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const res = axios.get(`${url}`).then((res) => {
      setJobs(res.data.jobs);
    });
  }, []);
  return (
    <React.Fragment>
      <Jumbotron fluid>
        <Container>
          <h2>صنايعي خبره : خدمتنا</h2>
          <p>
            صنايعي خبره هو بوابة اى حرفه , وعشان نضمن اننا نكون حلقة وصل فعالة
            اعتمدنا على تحقيق الفرص للصنايعي والعميل
          </p>
          <hr />
        </Container>
      </Jumbotron>
      <div className="work">
        <div className="container">
          {jobs.length >0 ?
          jobs.map((item) => {
            return (
              <div className="product">
                <div className="imgbox">
                  <img src={item.image} alt="watch" />
                </div>
                <div className="content">
                  <h2>{item.name}</h2>
                  <br />

                  <Link to={`/allCrafts/${item._id}`} className="choose">
                    اختار الصنايعى
                  </Link>
                </div>
              </div>
            );
          }):<Loader />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
