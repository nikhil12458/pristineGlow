import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {

  const navElem = ["Home", "Featured", "Contact", "Custom-Order", "Help"];
  
  return (
    <nav className='navbar'>
      <img src="./prop/prop1.png" alt="" />
      {navElem.map((item, idx) => {
        return <Link className='nav-items' key={idx} to={`/${item.toLowerCase()}`}>{item}</Link>
      })}
      
    </nav>
  )
}

export default Nav
