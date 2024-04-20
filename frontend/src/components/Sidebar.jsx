import React from 'react'
import './sidebar.scss'

const Sidebar = ({ color = null }) => {
  return (
    <div className='options' style={{ backgroundColor: color }}>
      <div className='options-wrap'>
        <h2>Categories</h2>
        <hr className='hr' />
        <ul>
          <li>Clothes</li>
          <li>Bus Tickets</li>
          <li>Movie Tickets</li>
          <li>Food</li>
          <li>Pharmacy</li>
          <li>Electronics</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar