import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
} from 'mdb-react-ui-kit';

function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggleNavbar = () => {
    setShowNav(!showNav);
  };

  return (
    <MDBNavbar light bgColor="light" className="flex justify-between items-center p-4 shadow-lg">
      <MDBNavbarBrand href="#" className="text-xl font-bold text-blue-600">FortiFusion DSA Web App</MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleNavbar} className="text-blue-600" />
      <MDBCollapse show={showNav}>
        <MDBNavbarNav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <MDBNavbarItem>
            <MDBNavbarLink href="#" className="text-gray-700 hover:text-blue-600">Home</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href="#" className="text-gray-700 hover:text-blue-600">About</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href="#" className="text-gray-700 hover:text-blue-600">Services</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href="#" className="text-gray-700 hover:text-blue-600">Contact</MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
}

export default Header;
