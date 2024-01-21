import React from 'react'
import data from '../data'
import Coupon from './coupon'
import './home.scss'

const Home = () => {
  const coupons=data.map(item => {
    return (
        <Coupon
            key={item.lmd_id}
           {...item}

            
        />
    )
})       
  return (
    <div className='home'>
      {coupons}
    </div>
  )
}

export default Home
