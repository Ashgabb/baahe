import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive offers in your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" name="" id="" placeholder='Enter your email id' />
        <button type="submit">Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
