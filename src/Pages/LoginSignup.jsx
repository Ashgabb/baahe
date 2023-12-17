import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="" id="" placeholder='Enter Your Name'/>
          <input type="email" name="" id="" placeholder='Enter your email'/>
          <input type="password" name="" id="" placeholder='Enter Password'/>
        </div>
        <button type="submit">Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>I have read and agree to terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
