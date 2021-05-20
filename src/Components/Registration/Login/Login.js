import React, { useContext, useState, useEffect } from "react";
import "./Login.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import logo from "../../img/logo.png";
import { AuthContext } from "../../../context/auth/AuthState";

const Login = (props) => {
  const { errors, login, userAuth, success } = useContext(AuthContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  useEffect(() => {
    if (success === true) {
      props.history.push("/");
    }
    // eslint-disable-next-line
  }, [success, AuthContext]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="Login">
      {errors !== null ? <Alert variant="danger">{errors}</Alert> : null}
      <Form className="RegistationForm" onSubmit={handlesubmit}>
        <h1 style={{ fontSize: "27px", fontWeight: "bold" }}>تسجيل دخول</h1>
        <img src={logo} alt="" />
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="أدخل البريد الالكتروني"
            onChange={handleChange}
            name="email"
            value={email}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="أدخل كلمة المرور"
            onChange={handleChange}
            name="password"
            value={password}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox float-right">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              تذكرني
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-dark btn-lg btn-block"
          style={{ fontSize: "17px" }}
        >
          تسجيل دخول
        </button>
      </Form>
      <p
        className="question forgot-password text-right"
        style={{
          marginTop: "13px",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        لدي حساب بالفعل{" "}
        <Link to="/Signup_Customer" style={{ color: "rgb(16, 56, 92)" }}>
          تسجيل دخول
        </Link>
      </p>{" "}
    </div>
  );
};

export default Login;
