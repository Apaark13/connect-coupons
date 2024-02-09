import React, { useState ,useEffect} from "react";
import "./user.scss";
import data from "../data";
import Coupon from "./coupon";
import { useAuth } from '../authContext';
import AddCoupon from "./AddCoupon";

const User = () => {
  const { user,login} = useAuth();
  const [loading, setLoading] = useState(true);
  const [coupons, setCoupons] = useState([]);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
       
        console.log(user)
        const response = await fetch(`http://localhost:5000/users/get/${user}`);
         console.log(`http://localhost:5000/users/get/${user}`)
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const data = await response.json();
        console.log(data)
        const mappedCoupons = data.map(item => (
          <Coupon key={item.lmd_id} {...item} />
        ));

        setCoupons(mappedCoupons);
      } catch (error) {
        setError('Error fetching data');
      }
    };

    fetchData();
  }, []);
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
