import React, { useState,useEffect } from 'react'
import data from '../data'
import Coupon from './coupon'
import './home.scss'

const Home =() => {
  const [coupons, setCoupons] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/users/get");

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
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
    <div className='home-full'>
      <div className='options'>
        options
      </div>
    <div className='home'>
      <div className='heading'>
        Coupons
      </div>
      {coupons}
    </div>
    </div>
   
  )
}

export default Home
