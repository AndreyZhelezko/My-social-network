import React from 'react';
import modClass from './Header.module.css'
import SwitchTheme from "./SwitchTheme/SwithTheme";


const Header = (props) => {
	return (
		<header className={modClass.wrapper}>
			<a href="/">
				<img src={props.header.logo_src} alt="logo"/>
			</a>
			<SwitchTheme />
		</header>
	)
}

export default Header;