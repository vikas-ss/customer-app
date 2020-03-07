import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = () => {
	return (
		<div>
	       	<Nav>
		        <NavItem>
		          <NavLink href="/home">Home</NavLink>
		        </NavItem>
		        <NavItem>
		          <NavLink href="/about">About</NavLink>
		        </NavItem>
		        <NavItem>
		          <NavLink href="/contact">Contact</NavLink>
		        </NavItem>
		    </Nav>
		</div>
	)
}

export default Navbar;