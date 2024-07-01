import logo from '../../assets/app-logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [btnName,setBtnName]=useState("SignIn")
  return (
    <div className="header">
      <img className="app-logo" src={logo} alt="app-logo" />

      <div className="nav-items">
        <ul>
          <li><Link to={'/'} className="no-decoration">Home</Link></li>
          <li><Link to={'/about'} className="no-decoration">About</Link></li>
          <li><Link to={'/contact'} className="no-decoration">Contact</Link></li>
          <li><Link to={'/bringme-mart'} className="no-decoration">BringMart</Link></li>
          <li onClick={()=>{
            btnName =="SignIn"? setBtnName("SignOut"):setBtnName("SignIn");
          }}>{btnName}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;