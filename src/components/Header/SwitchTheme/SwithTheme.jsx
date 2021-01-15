import React from "react";
import modClass from './SwitchTheme.module.css';
import ThemeSwitcher from "react-theme-switcher";

const SwitchTheme = () => {
    return (
        <div className={modClass.wrapper}>
            Light
            <ThemeSwitcher
                cssSelector="body"
                darkColor="#282c34"
                lightColor="#c1c1c1"
                lightTextColor="#272b33"
                darkTextColor="#F2DBC3"
            />
            Dark
        </div>
    );
}

export default SwitchTheme;
