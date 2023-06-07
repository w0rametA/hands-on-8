import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between font-bold px-8 h-14">
      <h2 className="">Cleverse</h2>
      <div className="flex gap-14">
        <a>About Us</a>
        <a>Blog</a>
        <a>Career</a>
        <a>Contact Us</a>
      </div>
    </div>
  )
}

export default Navbar
