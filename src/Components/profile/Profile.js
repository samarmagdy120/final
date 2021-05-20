import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/auth/AuthState";
import Loader from "../Loader";
import StarPicker from "react-star-picker";
import RateAndComment from "../rateAndComment/RateAndComment";

const Profile = () => {
  const state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  };

  const { getUserData, user, errors, success, uploadProfileImage } =
    useContext(AuthContext);
  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);
  console.log(user);
  const handleFile = (e) => {
    // console.log(e.target.files[0]);
    uploadProfileImage(e.target.files[0]);
  };
  return (
    <div className="profile">
      {user && user !== null ? (
        <div
          className="container profilecraft-p"
          style={{ height: "500px", display: "inlineBlock" }}
        >
          <div className="row">
            <div className="col-lg-2">
              {" "}
              {user.image && user.image == "image.jpg" ? (
                <div
                  className="wrapper"
                  style={{
                    backgroundImage: `url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')`,
                  }}
                >
                  {" "}
                  <input
                    type="file"
                    className="my_file"
                    onChange={handleFile}
                  />
                </div>
              ) : (
                <div
                  className="wrapper"
                  style={{ backgroundImage: `url('${user.image}')` }}
                >
                  {" "}
                  <input
                    type="file"
                    className="my_file"
                    onChange={handleFile}
                  />
                </div>
              )}
            </div>
            <div className="col-lg-10">
              <ul
                className="list-unstyled"
                style={{
                  float: "right",
                  textAlign: "right",
                  marginTop: "25px",
                  marginRight: "35px"
                }}
              >
                <li>
                  الاسم: {user.fname} {user.lname}
                </li>
                <li>الموبايل: {user.phone}</li>
                {user.job ? <li>المهنة: {user.job.name}</li> : null}
                {user.role !== "client" ? (
                  <li>
                    التقييم : <StarPicker value={user.rating} />
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
          <RateAndComment state={state} id={user._id} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Profile;
