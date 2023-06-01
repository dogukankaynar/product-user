import React from 'react'
import {Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
      <Link className='link' to ={"/product"}>Add Product</Link>
      <Link className='link' to ={"/user"}>Add User</Link>
    </div>
  )
}

export default Header