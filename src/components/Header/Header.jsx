import React from 'react';
import ThemeSwitcher from "react-theme-switcher";
import modClass from './Header.module.css'


const Header = () => {
	return (
		<header className={modClass.wrapper}>
			sasd
			<ThemeSwitcher />
		</header>
	)
}

export default Header;