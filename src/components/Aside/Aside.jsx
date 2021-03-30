import React from 'react';
import { NavLink } from 'react-router-dom';
import modClass from './Aside.module.css';


const Aside = () => {
	return (
		<aside className={modClass.wrapper}>
			<nav className={modClass.nav}>
				<NavLink exact to='/' activeClassName={modClass.active}>Profile</NavLink>
				<NavLink to='/Messages' activeClassName={modClass.active}>Messages</NavLink>
				<NavLink to='/News' activeClassName={modClass.active}>News</NavLink>
				<NavLink to='/Music' activeClassName={modClass.active}>Music</NavLink>
				<NavLink to='/Settings' activeClassName={modClass.active}>Settings</NavLink>
			</nav>
		</aside>
	);
}

export default Aside;