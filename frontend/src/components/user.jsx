import React, { useState ,useEffect} from "react";
import "./user.scss";
import data from "../data";
import Coupon from "./coupon";
import AddCoupon from "./AddCoupon";
import jwt from 'jsonwebtoken'

const User = () => {

  const [coupons, setCoupons] = useState([]);
  const [error, setError] = useState(null);
 const [cur,setCur]=useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
  
        if (token) {
          try {
            const decodedUser = jwt.decode(token);
            console.log(decodedUser);
            
            if (decodedUser) {
              setCur(decodedUser.email);
            }
          } catch (error) {
            console.error('Error decoding token:', error);
            //
          }
        }
  
        if (cur) {
          const response = await fetch(`http://localhost:5000/users/get/${cur}`);
          console.log(`http://localhost:5000/users/get/${cur}`);
  
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
  
          const data = await response.json();
          console.log(data);
  
          const mappedCoupons = data.map(item => (
            <Coupon key={item.lmd_id} {...item} />
          ));
  
          setCoupons(mappedCoupons);
        }
      } catch (error) {
        setError('Error fetching data');
      }
    };
  
    fetchData();
  }, [cur]); 
  
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
          <AddCoupon/>
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
