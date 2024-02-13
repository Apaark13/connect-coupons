import React from "react";
import "./coupon.scss";

const Coupon = (props) => {
  return (
    <div className="coupon">
      <div className="img">
        <img src='/assets/coupon-img.jpg' alt="" />
      </div>
      <div className="coupon-img">
        <img src="/assets/user.png" alt="" />
      <div className="details">
        <div className="title">
          {props.title}
        </div>
        <div className="description">{props.description}</div>
        <div>
          {props.code}
        </div>
        <div className="valid">
          Valid Upto: {props.end_date}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Coupon;
