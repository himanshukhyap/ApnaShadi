import React from 'react'
import { Link } from 'react-router-dom'
import { LoginIcon } from '../Icon'

export default function Header() {
  return (
  <>
  <nav className="navbar shadow-sm ">
  <div className="container d-flex justify-items-between">
    <Link className="navbar-brand" to="/">Apni Shadi</Link>
    <Link className="nav-link" to="/Login">{LoginIcon} Login</Link>
    
      
   

     
      {/* <ul className="navbar-nav">
      <li className="nav-item ">
        
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="#">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="">Disabled</Link>
        </li>
      </ul> */}
     
  
  </div>
</nav>

  </>
  )
}
