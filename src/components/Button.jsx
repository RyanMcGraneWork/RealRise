import React from 'react'

const Button = ({styles}) =>  (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none  bg-gradient-to-r from-green-400 to-blue-500 
  hover:from-pink-500 hover:to-yellow-500 ... ${styles}`}>
  Get Started
  </button>
  )


export default Button