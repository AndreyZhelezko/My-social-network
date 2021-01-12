import React from 'react';
import { NavLink } from 'react-router-dom';
import modClass from './Aside.module.css';


const Aside = () => {
	return (
		<aside className={modClass.wrapper}>
			<nav className={modClass.nav}>
				<NavLink exact to='/' activeClassName={modClass.active}>Home</NavLink>
				<NavLink to='/profile' activeClassName={modClass.active}>Profile</NavLink>
				<NavLink to='/Dialogs' activeClassName={modClass.active}>Dialogs</NavLink>
			</nav>
		</aside>
	);
}

export default Aside;