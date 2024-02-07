// AddCoupon.js
import React, { useState } from 'react';
import './AddCoupon.scss'
import { useAuth } from '../authContext';


function AddCoupon() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [couponTitle,setCouponTitle]=useState();
  const [couponDescription,setCouponDescription]=useState();
  const [endDate,setEndDate]=useState();
  const [couponCode,setCouponCode]=useState();
   const {user}=useAuth()

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const addCouponFunc = async() =>{
    const date=endDate.toString()
    const res=await fetch('http://localhost:5000/users/post',{
      method:'POST',  
      headers:{
           'Content-Type':'application/json',
          },
      body:JSON.stringify({
           code:couponCode,
          description:couponDescription,
          title:couponTitle,
          end_date:date,
          email:'pg@gmail.com'
          }),
      })
      const data=await res.json()
   console.log(data.status)
    closePopup()
  }

  return (
    <div className='add-coupon'>
      <button onClick={openPopup}>Add Coupon</button>

      {isPopupOpen && (
        <div className="popup-container">
          <div className="popup-content">
            <h2>Add Coupon</h2>
            <form>
              <label htmlFor="couponTitle">Coupon Title:</label>
              <input type="text" 
                     id="couponTitle" 
                     onChange={(e)=>setCouponTitle(e.target.value)} 
                     name="couponTitle" required />
              <br />

              <label htmlFor="couponDescription">Coupon Description:</label>
              <textarea
                id="couponDescription"
                name="couponDescription"
                onChange={(e)=>setCouponDescription(e.target.value)}
                rows="4"
                required
              ></textarea>
              <br />

              <label htmlFor="endDate">End Date:</label>
              <input type="date"
                     id="endDate"
                     onChange={(e)=>setEndDate(e.target.value)} 
                     name="endDate" required />
              <br />

              <label htmlFor="couponCode">Coupon Code:</label>
              <input type="text" 
                     id="couponCode" 
                     onChange={(e)=>setCouponCode(e.target.value)}
                     name="couponCode" required />
              <br />

              <button type="button" className="add-btn" onClick={addCouponFunc}>
                Add
              </button>
              <button type="button" className="close-btn" onClick={closePopup}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddCoupon;
