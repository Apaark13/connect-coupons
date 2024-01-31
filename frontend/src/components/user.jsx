import React from "react";
import "./user.scss";
import data from "../data";
import Coupon from "./coupon";

const User = () => {

  const coupons = data.map((item) => {
    return <Coupon key={item._id} {...item} />;
  });
  return (
    <div className="user">
      <div className="user-profile">
        <div className="pic">
          <img src="/assets/user.png" alt="" />
        </div>
        <div className="details">
          <h3>Dummy User</h3>
          <div>
            <ul>
              <li>
                <span>4</span>Sent
              </li>
              <li>
                <span>12</span>Received
              </li>
              <li>
                <span>23</span>Coupons
              </li>
            </ul>
          </div>
          <section>
            bio - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Inventore dolores distinctio deserunt enim eaque aperiam quo
            cupiditate aliquam! Vero possimus deserunt adipisci earum saepe
            enim!
          </section>
        </div>
      </div>
      <hr />
      <div className="addcoupon">
        <button>
          Add Coupon
        </button>
      </div>
      <div className="user-coupons">
        
        <ul>
          <li
          //  className="active"
          >
            All
          </li>
          <li className="active">Sent</li>
          <li>Received</li>
        </ul>
        {coupons}
      </div>
    </div>
  );
};

export default User;
