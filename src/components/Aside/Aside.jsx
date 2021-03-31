import React from 'react';
import { NavLink } from 'react-router-dom';
import modClass from './Aside.module.css';


const Aside = () => {
	return (
		<aside className={modClass.wrapper}>
			<nav className={modClass.nav}>
				<NavLink exact to='/' activeClassName={modClass.active}>Profile</NavLink>
				<NavLink to='/messages' activeClassName={modClass.active}>Messages</NavLink>
				<NavLink to='/news' activeClassName={modClass.active}>News</NavLink>
				<NavLink to='/music' activeClassName={modClass.active}>Music</NavLink>
				<NavLink to='/settings' activeClassName={modClass.active}>Settings</NavLink>
			</nav>
		</aside>
	);
}

export default Aside;