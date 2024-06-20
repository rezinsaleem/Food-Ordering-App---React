import logo from '../../assets/app-logo.png';
import { useState } from 'react';

const Header = () => {
  const [btnName,setBtnName]=useState("SignIn")
  return (
    <div className="header">
      <img className="app-logo" src={logo} alt="app-logo" />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li onClick={()=>{
            btnName =="SignIn"? setBtnName("SignOut"):setBtnName("SignIn");
          }}>{btnName}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;