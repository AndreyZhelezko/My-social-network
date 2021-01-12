import React from 'react';
import { NavLink } from 'react-router-dom';
import modClass from './Header.module.css'


const Header = () => {
	return (
		<header className={modClass.wraper}>
			<nav className={modClass.nav}>
				<NavLink to='/profile' activeClassName={modClass.active}>Profile</NavLink>
				<NavLink to='/Dialogs' activeClassName={modClass.active}>Dialogs</NavLink>
			</nav>
		</header>
	)
}

export default Header;