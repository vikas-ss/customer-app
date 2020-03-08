import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
	       	<Nav>
		        <NavItem>
		          <NavLink to="/" tag={Link}>Home</NavLink>
		        </NavItem>
		        <NavItem>
		          <NavLink to="/about" tag={Link}>About</NavLink>
		        </NavItem>
		        <NavItem>
		          <NavLink to="/contact" tag={Link}>Contact</NavLink>
		        </NavItem>
		    </Nav>
		</div>
	)
}

export default Navbar;