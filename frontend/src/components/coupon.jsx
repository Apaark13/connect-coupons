import React from "react";
import "./coupon.scss";
import { useNavigate } from "react-router-dom";

const Coupon = (props) => {
  const navigateTo = useNavigate();
  const handleClick=()=>{
    console.log(props.email)
    navigateTo(`/user/${props.email}`);

  }
  return (
    <div className="coupon">
      <div className="img">
        <img src='/assets/coupon-img.jpg' alt="" />
      </div>
      <div className="coupon-img">
        <img onClick={handleClick} src="/assets/user.png" alt="" />
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
