import React, { useState, useEffect } from "react";

import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
 
 





import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else{
      setButton(true)
    }
  }
useEffect(()=> {
  showButton()
}, [])

window.addEventListener('resize', showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavBarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              SIGMA
            </NavLogo>

            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/services">Services</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/products">Products</NavLinks>
              </NavItem>

              
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
