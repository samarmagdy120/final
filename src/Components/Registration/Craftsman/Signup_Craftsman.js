import React, { useContext, useState, createContext, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Craftsman/Signup_Craftsman.css";
import { AuthContext } from "../../../context/auth/AuthState";
import { JobContext } from "../../../context/jobs/JobState";
import { Alert } from "react-bootstrap";

const Signup_Craftsman = (props) => {
  const [rating, setRating] = useState(0);
  const [rating2, setRating2] = useState(0);
  const { userAuth, errors, registerCraftMan, success } =
    useContext(AuthContext);

  const { errors: jobError, getJobs, Jobs, loading } = useContext(JobContext);

  useEffect(() => {
    if (success === true) {
      props.history.push("/");
    }
    getJobs();
    // eslint-disable-next-line
  }, [success, AuthContext]);

  console.log(Jobs);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [nationalId, setNationalId] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [job, setJob] = useState(null);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  // const [user, setUser] = useState({
  //   fname: "",
  //   lname: "",
  //   nationalId: "",
  //   mobile: "",
  //   email: "",
  //   address: "",
  //   jobs: "",
  //   password: "",
  //   password2: "",
  // });

  // const {
  //   fname,
  //   lname,
  //   nationalId,
  //   mobile,
  //   email,
  //   address,
  //   job,
  //   password,
  //   password2,
  // } = user;

  const handleSelect = (e) => {
    let index = e.target.selectedIndex;
    let ele = e.target.childNodes[index];
    console.log(ele.id);
    setJob(ele.id);
    console.log(job);
  };

  // const handleChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Password does not match");
    } else {
      registerCraftMan({
        fname,
        lname,
        email,
        job,
        password,
        phone,
        nationalId,
        address,
      });
    }
  };
  console.log(errors);
  console.log(success);
  return (
    <div className="Signup_Craftsman">
      <div className="container">
        {errors !== null ? <Alert variant="danger">{errors}</Alert> : null}
        <Form className="RegistationForm" onSubmit={handlesubmit}>
          <h1 style={{ fontSize: "27px", fontWeight: "bold" }}>
            ???????? ?????????? ?????????????? !
          </h1>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="?????????? ??????????"
              name="fname"
              onChange={(e) => setFname(e.target.value)}
              value={fname}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="?????????? ????????????"
              name="lname"
              onChange={(e) => setLname(e.target.value)}
              value={lname}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="?????????? ????????????"
              name="nationalId"
              onChange={(e) => setNationalId(e.target.value)}
              value={nationalId}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="?????? ????????????????"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="???????????? ????????????????????"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="??????????????"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              required
            />
          </div>
          <div className="form-group" style={{ width: "61%" }}>
            <select
              name="jobs"
              onChange={handleSelect}
              className="form-control"
            >
              {Jobs.length > 0 ? (
                Jobs.map((item) => (
                  <option key={item._id} id={item._id} value={item.name}>
                    {item.name}
                  </option>
                ))
              ) : (
                <option>??????????...</option>
              )}
            </select>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="???????? ????????????"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="?????????? ???????? ????????????"
              name="password2"
              onChange={(e) => setPassword2(e.target.value)}
              value={password2}
            />
          </div>

          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block"
            style={{ fontSize: "17px" }}
          >
            ?????? ????????
          </button>
        </Form>
        <p
          className="question forgot-password text-center"
          style={{
            marginTop: "13px",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          ?????? ???????? ????????????{" "}
          <Link to="/Login" style={{ color: "rgb(16, 56, 92)" }}>
            ?????????? ????????
          </Link>
        </p>{" "}
      </div>
    </div>
  );
};

export default Signup_Craftsman;
