import React from 'react';
import logo from '../../images/logo.png';
import modClass from './Header.module.css'
import SwitchTheme from "./SwitchTheme/SwithTheme";


const Header = () => {
	return (
		<header className={modClass.wrapper}>
			<a href="/">
				<img src={logo} alt="as"/>
			</a>
			<SwitchTheme />
		</header>
	)
}

export default Header;