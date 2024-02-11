import React from "react";
import "./coupon.scss";


const Coupon = (coupon) => {
  return (
    <div className="coupon-container">
      <div className="image">
       <img src="/assets/user.png" alt="" />
      <h2>{coupon.email}</h2>
      </div>
      <hr />
      <div className="coupon">
      <div className="coupon-details">
        <div>
          <strong>Coupon Code:</strong> {coupon.code}
        </div>
        <div>
          <strong>Category:</strong> {coupon.title}
        </div>
        <div>
          <strong>Expires:</strong> {coupon.end_date}
        </div>
        <div>
          <strong>Offer:</strong> {coupon.title}
        </div>
       
      </div>
      <div className="coupon-description">
        <strong>Description:</strong>
        <p>{coupon.description}</p>
      </div>
      </div>
    </div>
  );
};

export default Coupon;
