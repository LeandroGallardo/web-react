import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import logo from  '../../src/logo.svg';

const Example = (props) => {
 // const [dropdownOpen, setDropdownOpen] = useState(false);

 // const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Nav className="d-flex justify-content-center align-items-center">
        <img src={logo} alt="Logo" />
   
   
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Example;