import React, { useState, useEffect, useContext } from "react";
import Rate from "../rate/Rate";
import "./RateAndComment.css";
import { ReviewContext } from "../../context/reviews/reviewState";
import StarPicker from "react-star-picker";

const RateAndComment = ({ state, id }) => {
  // const [comment, setComment] = useState([]);
  // const [current, setCurrent] = useState([]);

  // const [rating, setRating] = useState(0);
  // const [rating2, setRating2] = useState(0);

  const { errors, loading, reviews, getReviews } = useContext(ReviewContext);

  useEffect(() => {
    getReviews(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, ReviewContext]);

  console.log(reviews);

  return (
    <div className="RateAndComment">
      {/* <form onSubmit={handleChange}>
          <input
            type="text"
            placeholder="أكتب تعليقا ......................"
            name="comment"
            onChange={handleChange}
          />
        </form> */}

      <ul className="list-unstyled comment-view">
        {reviews && reviews.length > 0
          ? reviews.map((item) => (
              <li style={{ position: "relative" }}>
                {item.userImage && item.userImage !== "image.jpg" ? (
                  <img
                    src={item.userImage}
                    style={{
                      margin: "auto",
                      borderRadius: "50%",
                      width: "43px",
                      textAlign: "center",
                      position: "relative",
                      top: "-41px",
                    }}
                    alt=""
                  />
                ) : (
                  <img
                    src={state.profileImg}
                    style={{
                      margin: "auto",
                      borderRadius: "50%",
                      width: "43px",
                      textAlign: "center",
                      position: "absolute",
                      top: "18px",
                      right: "0",
                    }}
                    alt=""
                  />
                )}

                <div className="comment">
                  <h3>{item.userName}</h3>
                  <StarPicker value={item.rating} numberStars={5} />
                  <p>{item.text}</p>
                </div>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default RateAndComment;
