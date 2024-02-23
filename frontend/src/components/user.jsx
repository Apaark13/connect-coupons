import React, { useState ,useEffect} from "react";
import "./user.scss";
import data from "../data";
import Coupon from "./coupon";
import AddCoupon from "./AddCoupon";
import jwt from 'jsonwebtoken'
import { useNavigate } from "react-router-dom";
import {useParams} from 'react-router-dom';

const User = () => {
  const { userId } = useParams();

  const [coupons, setCoupons] = useState([]);
  const [error, setError] = useState(null);
 const [cur,setCur]=useState()
 const navigateTo = useNavigate();
  console.log(cur);
  console.log(userId)
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
      }
    }
  
        if (cur) {
          const response = await fetch(`http://localhost:5000/users/get/${userId}`);
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
  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigateTo('/login')
 }
  return (
    <div className="user">
      <div className="user-profile">
        <div className="pic">
          <img src="/assets/user.png" alt="" />
        </div>
        <div className="details">
          <div className="div1">
          <div className="div2">
          <h1>{userId}</h1>
          <h4> User Coupons :{coupons.length}</h4>
          </div>
           <div className="div3">
           {    
              userId==cur?<button class="logout-button" onClick={handleLogout}>Logout</button>:<div></div>
           }
           </div>
           </div>
          <section>
            bio - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Inventore dolores distinctio deserunt enim eaque aperiam quo
            cupiditate aliquam! Vero possimus deserunt adipisci earum saepe
            enim!
          </section>
        </div>
      </div>
      <div className="addcoupon">
        {
          userId==cur?<AddCoupon/>:<></>
        }
          
      </div>
      <hr />
      
      <div className="user-coupons">
        {coupons}
      </div>
    </div>
  );
};

export default User;
