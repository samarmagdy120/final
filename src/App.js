import React, { useEffect } from "react";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import safetyMeasures from "./Components/SafetyMeasures/safetyMeasures";
import Navbartop from "./Components/Navbartop/Navbartop";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import Signup_Craftsman from "./Components/Registration/Craftsman/Signup_Craftsman";
import Signup_Customer from "./Components/Registration/Customer/Signup_Customer";
import Login from "./Components/Registration/Login/Login";
import Footer from "./Components/Footer/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";
import AuthState from "./context/auth/AuthState";
import JobState from "./context/jobs/JobState";
import AllCrafts from "./Components/allcraft/AllCrafts";
import Profilecraftman from "./Components/profilecraftman/Profilecraftman";
import ReviewState from "./context/reviews/reviewState";
import Profile from "./Components/profile/Profile";

function App() {
  // useEffect(() => {
  //   const isAuth = async () => {
  //   let token = await localStorage.token;
  //   // console.log(token)
  //   if (token) {
  //     setAuthToken(token);
  //     console.log("isAuthed");
  //   } else {
  //     console.log("is not Authed");
  //   }
  //   }
  //   isAuth()
  // }, []);

  return (
    <AuthState>
      <JobState>
        <ReviewState>
          <Router>
            <Navbartop />
            <NavBar />
            <ScrollToTop />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/profilecraftman/:id" component={Profilecraftman} />
              <Route path="/allCrafts/:id" component={AllCrafts} />

              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Signup_Craftsman" component={Signup_Craftsman} />
              <Route path="/Signup_Customer" component={Signup_Customer} />
              <Route path="/Login" component={Login} />
              <Route path="/profile" component={Profile} />

              <Route path="/safetyMeasures" component={safetyMeasures} />
            </Switch>
            <Footer />
          </Router>
        </ReviewState>
      </JobState>
    </AuthState>
  );
}
export default App;
