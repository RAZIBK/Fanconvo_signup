import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import SignupBody from '../../components/Signup/SignupBody'
import './Signup.css'

export default function Signup() {
  return (
    <div className='signupBg h-full'>
        <Navbar/>
        <SignupBody />
        <Footer/>

    </div>
  ) 
}
