import React,{useState} from "react";
import "./Header.css";

function Header() {
  const [login, setLogin] = useState('login')

 
  return (
    <section className="header__container">
      <section className="logo__container">
        <h1 className="logo">FOODI</h1>
      </section>

      <section className="nav__items">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Services</li>
          <li>Offers</li>
        </ul>
      </section>

      <section className="nav__items__two">
      <i className='bx bx-cart'></i>
          <button className="contact" type="button"> <i className='bx bx-phone-call'></i>contact</button>
        </section>
    </section>
  );
}

export default Header;
