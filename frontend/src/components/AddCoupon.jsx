// AddCoupon.js
import React, { useState } from 'react';
import './AddCoupon.scss';

function AddCoupon() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const addCouponFunc = () =>{
    console.log("coupon added")
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
              <input type="text" id="couponTitle" name="couponTitle" required />
              <br />

              <label htmlFor="couponDescription">Coupon Description:</label>
              <textarea
                id="couponDescription"
                name="couponDescription"
                rows="4"
                required
              ></textarea>
              <br />

              <label htmlFor="endDate">End Date:</label>
              <input type="date" id="endDate" name="endDate" required />
              <br />

              <label htmlFor="couponCode">Coupon Code:</label>
              <input type="text" id="couponCode" name="couponCode" required />
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
