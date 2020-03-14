import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
	       	<Nav>
		        <NavItem>
		          <NavLink to="/" tag={Link}>Axios</NavLink>
		        </NavItem>
		        <NavItem>
		          <NavLink to="/template" tag={Link}>Template</NavLink>
		        </NavItem>
		        <NavItem>
		          <NavLink to="/store" tag={Link}>Redux Store</NavLink>
		        </NavItem>
		    </Nav>
		</div>
	)
}

export default Navbar;